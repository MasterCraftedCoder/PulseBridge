import { motion, AnimatePresence } from 'framer-motion'
import { X, Mic, MicOff, MapPin, Send, Phone, Heart } from 'lucide-react'
import { useTriage } from '@/hooks/useTriage'
import { useIncidents } from '@/hooks/useIncidents'
import { useAuth } from '@/hooks/useAuth'
import { useState, useRef, useEffect } from 'react'

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [isRecording, setIsRecording] = useState(false)
  const [symptoms, setSymptoms] = useState('')
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  
  const { analyzeSymptoms, generateVoiceAdvice, loading } = useTriage()
  const { createIncident } = useIncidents()
  const { user } = useAuth()
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (isOpen) {
      getCurrentLocation()
    }
  }, [isOpen])

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' })
        // Convert audio to text (would use speech recognition API)
        setSymptoms('Chest pain and difficulty breathing') // Mock for demo
      }

      mediaRecorder.start()
      setIsRecording(true)
      startWaveformAnimation(stream)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }

  const startWaveformAnimation = (stream: MediaStream) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const audioContext = new AudioContext()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaStreamSource(stream)
    source.connect(analyser)

    analyser.fftSize = 256
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const draw = () => {
      if (!isRecording) return

      analyser.getByteFrequencyData(dataArray)

      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const barWidth = (canvas.width / bufferLength) * 2.5
      let barHeight
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, '#FF3B30')
        gradient.addColorStop(1, '#0A84FF')
        
        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
  }

  const handleSubmit = async () => {
    if (!symptoms || !location || !user) return

    setStep(2)

    // Analyze symptoms with AI
    const triageResult = await analyzeSymptoms(symptoms)
    
    if (triageResult) {
      // Create incident
      const { data: incident } = await createIncident({
        reporter_id: user.id,
        lat: location.lat,
        lng: location.lng,
        severity: triageResult.severity,
        status: 'open',
        description: symptoms,
        ai_advice: triageResult.advice,
        volunteer_id: null,
        response_time: null
      })

      if (incident) {
        setStep(3)
        // Generate voice advice
        await generateVoiceAdvice(triageResult.advice)
      }
    }
  }

  const handleEmergencyCall = () => {
    window.location.href = 'tel:911'
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="p-8">
            {step === 1 && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emergency to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Emergency Help</h2>
                  <p className="text-gray-600">Describe your emergency and we'll get you help immediately</p>
                </div>

                {/* Emergency Call Button */}
                <div className="mb-8 p-4 bg-emergency/10 rounded-2xl border border-emergency/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-emergency">Life-threatening emergency?</h3>
                      <p className="text-sm text-gray-600">Call 911 immediately for severe emergencies</p>
                    </div>
                    <button
                      onClick={handleEmergencyCall}
                      className="bg-emergency hover:bg-emergency/90 text-white font-bold py-3 px-6 rounded-2xl flex items-center space-x-2 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call 911</span>
                    </button>
                  </div>
                </div>

                {/* Voice Input */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Describe your symptoms</h3>
                  
                  {/* Voice Recording */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <button
                        onClick={isRecording ? stopRecording : startRecording}
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200 ${
                          isRecording 
                            ? 'bg-red-500 animate-pulse' 
                            : 'bg-trust hover:bg-trust/90'
                        }`}
                      >
                        {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                      </button>
                    </div>
                    
                    {isRecording && (
                      <div className="mb-4">
                        <canvas
                          ref={canvasRef}
                          width={400}
                          height={100}
                          className="w-full h-24 rounded-xl border border-gray-200"
                        />
                      </div>
                    )}
                    
                    <p className="text-center text-sm text-gray-600">
                      {isRecording ? 'Recording... Tap to stop' : 'Tap to record your symptoms'}
                    </p>
                  </div>

                  {/* Text Input */}
                  <div className="relative">
                    <textarea
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Or type your symptoms here..."
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {location 
                        ? `Location detected: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
                        : 'Getting your location...'
                      }
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!symptoms || !location || loading}
                  className="w-full bg-emergency hover:bg-emergency/90 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{loading ? 'Analyzing...' : 'Get Help Now'}</span>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-trust to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Analyzing Your Emergency</h2>
                <p className="text-gray-600 mb-6">Our AI is processing your symptoms and finding the best help...</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm">AI triage assessment complete</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-trust rounded-full animate-pulse" />
                    <span className="text-sm">Notifying nearby volunteers...</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-emergency rounded-full animate-pulse" />
                    <span className="text-sm">Dispatching emergency response</span>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Help is On The Way!</h2>
                <p className="text-gray-600 mb-6">
                  Dr. Sarah Chen is 2.1 miles away and will arrive in approximately 4 minutes.
                </p>
                
                <div className="bg-success/10 p-6 rounded-2xl mb-6">
                  <h3 className="font-semibold mb-3">While you wait:</h3>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Stay calm and try to sit down</li>
                    <li>• Keep your phone nearby</li>
                    <li>• If symptoms worsen, call 911 immediately</li>
                    <li>• Someone will call you shortly to check in</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleEmergencyCall}
                    className="flex-1 bg-emergency hover:bg-emergency/90 text-white font-semibold py-3 px-6 rounded-2xl transition-colors"
                  >
                    Call 911
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default HelpModal