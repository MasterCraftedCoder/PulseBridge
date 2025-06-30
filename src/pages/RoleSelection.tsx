import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Heart, Users, Shield, Upload, CheckCircle } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { ShimmerButton } from '@/components/ui/ShimmerButton'

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<'citizen' | 'volunteer' | null>(null)
  const [credentialFile, setCredentialFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const { updateProfile } = useAuth()
  const navigate = useNavigate()

  const roles = [
    {
      id: 'citizen' as const,
      title: 'Citizen',
      description: 'Get emergency help when you need it most',
      icon: Heart,
      features: [
        'Instant emergency response',
        'AI-powered triage',
        'Medical record access',
        'Family protection plans'
      ],
      color: 'from-emergency to-red-600'
    },
    {
      id: 'volunteer' as const,
      title: 'Volunteer',
      description: 'Help save lives in your community',
      icon: Users,
      features: [
        'Emergency response training',
        'Community impact tracking',
        'NFT certification badges',
        'Professional networking'
      ],
      color: 'from-trust to-blue-600'
    }
  ]

  const handleRoleSelect = (role: 'citizen' | 'volunteer') => {
    setSelectedRole(role)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setCredentialFile(file)
    }
  }

  const handleSubmit = async () => {
    if (!selectedRole) return

    setLoading(true)

    try {
      // Update user profile with selected role
      await updateProfile({ role: selectedRole })

      // If volunteer and has credentials, trigger NFT minting
      if (selectedRole === 'volunteer' && credentialFile) {
        // TODO: Upload credential and mint NFT
        console.log('Uploading credential and minting NFT...')
      }

      // Redirect based on role
      if (selectedRole === 'volunteer') {
        navigate('/volunteers/onboarding')
      } else {
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-emergency/10 via-trust/10 to-success/10 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Role</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us personalize your PulseBridge experience by selecting how you'd like to participate in our emergency response network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon
            const isSelected = selectedRole === role.id

            return (
              <motion.div
                key={role.id}
                className={`glass-card p-8 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'ring-2 ring-emergency scale-105 shadow-2xl' 
                    : 'hover:shadow-xl hover:scale-102'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleRoleSelect(role.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                  <p className="text-gray-600">{role.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isSelected && (
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-emergency rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Volunteer Credential Upload */}
        {selectedRole === 'volunteer' && (
          <motion.div
            className="glass-card p-8 mb-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-trust mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Upload Your Credentials</h3>
              <p className="text-gray-600">
                Upload your medical license, certification, or training credentials to get verified faster.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <label className="block w-full">
                <div className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors duration-200 ${
                  credentialFile 
                    ? 'border-success bg-success/10' 
                    : 'border-gray-300 hover:border-trust'
                }`}>
                  {credentialFile ? (
                    <div>
                      <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                      <p className="font-medium text-success">{credentialFile.name}</p>
                      <p className="text-sm text-gray-600 mt-2">File uploaded successfully</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="font-medium text-gray-700">Click to upload credentials</p>
                      <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        {selectedRole && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ShimmerButton
              onClick={handleSubmit}
              disabled={loading}
              size="lg"
              className="px-12"
            >
              {loading ? 'Setting up your account...' : `Continue as ${selectedRole}`}
            </ShimmerButton>
            
            <p className="text-sm text-gray-600 mt-4">
              You can change your role later in your profile settings
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default RoleSelection