import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { symptoms } = JSON.parse(event.body || '{}')

    if (!symptoms) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Symptoms are required' })
      }
    }

    // Mock AI triage response (in production, would call OpenAI GPT-4)
    const mockResponse = {
      severity: symptoms.toLowerCase().includes('chest') ? 9 : 
                symptoms.toLowerCase().includes('pain') ? 7 : 5,
      advice: symptoms.toLowerCase().includes('chest') 
        ? 'This appears to be a cardiac emergency. Stay calm, sit down, and help is on the way. If you have aspirin and are not allergic, chew one tablet.'
        : 'Based on your symptoms, medical attention is recommended. Stay calm and follow the instructions from our responding volunteer.',
      recommendedActions: [
        'Stay calm and try to relax',
        'Sit or lie down in a comfortable position',
        'Keep your phone nearby',
        'Do not drive yourself to the hospital'
      ],
      estimatedWaitTime: 4
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
    console.error('Triage error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}

export { handler }