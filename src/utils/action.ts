'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export const generateChatResponse = async (
	chatMsg: string
): Promise<string> => {
	const response = await openai.chat.completions.create({
		messages: [
			{
				role: 'system',
				content: 'you are a helpful assistant',
			},
			{ role: 'user', content: chatMsg },
		],
		model: 'gpt-4.1-mini',
		temperature: 0,
	})

	console.log(response.choices[0].message)
	console.log(response)
	return 'awesome'
}
