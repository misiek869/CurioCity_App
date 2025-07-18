'use server'

import { Prisma } from '@prisma/client'
import OpenAI from 'openai'

const prisma = Prisma()

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

export const getActualTour = async ({ city, country }) => {
	return null
}
export const createTourResponse = async ({ city, country }) => {
	const query = `Find a ${city} in this ${country}.
If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`

	try {
		const reposnse = await openai.chat.completions.create({
			messages: [
				{ role: 'system', content: 'you are a tour guide' },
				{
					role: 'user',
					content: query,
				},
			],
			model: 'gpt-4.1-mini',
			temperature: 0,
		})
		const tourData = JSON.parse(reposnse.choices[0].message.content)
		if (!tourData.tour) {
			return null
		}
		return tourData.tour
	} catch (error) {
		console.log(error)
		return null
	}
}

export const getExistingTour = async ({ city, country }) => {
	return prisma.tour.findUnique({
		where: {
			city_country: {
				city,
				country,
			},
		},
	})
}

export const createNewTour = async ({ tour }) => {
	return prisma.tour.create({ data: tour })
}
