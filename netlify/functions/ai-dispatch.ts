import { Handler } from '@netlify/functions';
// TODO: Install openai npm package and import OpenAI client

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  // TODO: Parse incident details from event.body
  // TODO: Call OpenAI API with prompt
  // TODO: Return recommended action
  return {
    statusCode: 200,
    body: JSON.stringify({ recommendation: 'TODO: AI response here' })
  };
};

export { handler }; 