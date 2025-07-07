'use client'

import { generateChatResponse } from '@/utils/action'
import { useMutation } from '@tanstack/react-query'
import { Span } from 'next/dist/trace'
import { useState } from 'react'
import toast from 'react-hot-toast'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const Chat = () => {
	const [text, setText] = useState('')
	const [messages, setMessages] = useState<ChatMessage[]>([])

	const { mutate, isPending } = useMutation({
		mutationFn: async (message: string) => {
			const newMessages: ChatMessage[] = [
				...messages,
				{ role: 'user', content: message },
			]
			const response = await generateChatResponse(newMessages)
			if (response) {
				setMessages(prev => [...prev, { role: 'assistant', content: response }])
			}
			return response
		},
		onSuccess: data => {
			if (!data) {
				toast.error('Something went wrong...')
				return
			}
			setMessages(prev => [...prev, { role: 'user', content: data }])
		},
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		mutate(text)
		setMessages(prev => [...prev, { role: 'user', content: text }])
		setText('')
	}

	return (
		<div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
			<div>
				{messages.map(({ role, content }, index) => {
					const avatar = role === 'user' ? '👤' : '🤖'
					const bgColor = role === 'user' ? 'bg-base-200' : 'bg-base-100'
					return (
						<div
							className={`${bgColor} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
							key={index}>
							<span className='mr-4'>{avatar}</span>
							<p className='max-w-3xl'>{content}</p>
						</div>
					)
				})}
				{isPending ? <span className='loading'></span> : null}

				{/* <div className='mt-4'>
					{messages.map((msg, i) => (
						<div
							key={i}
							className={`p-2 ${
								msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
							}`}>
							<strong>{msg.role}:</strong> {msg.content}
						</div>
					))}
				</div> */}
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
						type='submit'
						disabled={isPending}>
						{isPending ? 'please wait' : 'ask your question'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Chat
