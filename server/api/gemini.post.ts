import { GoogleGenerativeAI } from '@google/generative-ai';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig(event);
  const genAI = new GoogleGenerativeAI(config.gemini);

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
  Generate a comprehensive reading section on the anatomy, 
  function, and significance of the human ${body.organ}. Include detailed 
  information on its structure, and the circulatory system. 
  Additionally, provide a separate section featuring 10 intriguing and cool facts 
  about the human ${body.organ}, showcasing its remarkable aspects and unique features. 
  Ensure that the content is informative, engaging, and well-organized to 
  captivate the reader's interest in understanding the intricacies of this vital organ. 
  Use Markdown to structure the response. Do not end with a conclusion. Use lists and short sentences.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const geminiResponse = response.text();

  return geminiResponse;
});
