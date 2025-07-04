'use server'

export const generateChatResponse = async (
	chatMsg: string
): Promise<string> => {
	console.log(chatMsg)
	return 'awesome'
}
