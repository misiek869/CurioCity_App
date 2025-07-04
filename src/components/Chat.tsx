'use client'

import { generateChatResponse } from '@/utils/action'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const Chat = () => {
	const [text, setText] = useState<string>('')
	const [messages, setMessages] = useState<string[]>([])

	const { mutate } = useMutation({
		mutationFn: async (message: string) => {
			const response = generateChatResponse(message)
			return response
		},
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		mutate(text)
		setText('')
	}

	return (
		<div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
			<div>
				<h2 className='text-5xl'>messages</h2>
			</div>
			<form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
				<div className='w-full join'>
					<input
						type='text'
						placeholder='Message'
						className='input input-bordered join-item w-full'
						value={text}
						required
						onChange={e => setText(e.target.value)}
					/>
					<button
						className='btn btn-success join-item capitalize'
						type='submit'>
						ask your question
					</button>
				</div>
			</form>
		</div>
	)
}

export default Chat
