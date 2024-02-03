import OpenAI from 'openai';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const openai = new OpenAI({
    apiKey: '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', // This is the default and can be omitted
  });

  async function main() {
    console.log("🟡")
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    };

    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

      console.log("🟡:", chatCompletion)
  }

  main();

  // Access public variables
  // const result = await $fetch(`/test`, {
  //   baseURL: config.public.apiBase,
  //   headers: {
  //     // Access a private variable (only available on the server)
  //     Authorization: `Bearer ${config.apiSecret}`
  //   }
  // })
  // return result
});
