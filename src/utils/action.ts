'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export const generateChatResponse = async (
	chatMessages: Array<{
		role: 'system' | 'user' | 'assistant'
		content: string
	}>
): Promise<string | null> => {
	try {
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'system',
					content: 'you are a helpful assistant',
				},
				...chatMessages,
			],
			model: 'gpt-4.1-mini',
			temperature: 0,
		})
		return response.choices[0].message.content
	} catch (error) {
		console.error('Error generating chat response:', error)
		return null
	}
}

export const getActualTour = ({ city, country }) => {
	return null
}
export const createTourResponse = ({ city, country }) => {
	return null
}
export const createNewTour = ({ city, country }) => {
	return null
}
