import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { text } = JSON.parse(event.body || '{}')

    if (!text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Text is required' })
      }
    }

    // Mock voice generation response (in production, would call ElevenLabs)
    const mockResponse = {
      audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      transcript: text,
      duration: 15
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify(mockResponse)
    }
  } catch (error) {
    console.error('Voice generation error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}

export { handler }