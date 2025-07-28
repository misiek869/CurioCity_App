'use client'

import { useQuery } from '@tanstack/react-query'
import ToursList from './ToursList'
import { getAllTours } from '@/utils/action'
import { useState } from 'react'

const ToursPage = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { data, isPending } = useQuery({
		queryKey: ['tours', searchTerm],
		queryFn: () => getAllTours(searchTerm),
	})

	return (
		<>
			<form className='max-w-lg mb-12 '>
				<div className='join w-full'>
					<input
						type='text'
						placeholder='enter city name or country'
						className='input input-ordered join-item w-full'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						required
					/>
					<button
						type='button'
						className='btn btn-primary join-item'
						disabled={isPending}
						onClick={() => setSearchTerm('')}>
						{isPending ? 'wait...' : 'reset'}
					</button>
				</div>
			</form>
			{isPending ? (
				<span className='loading'></span>
			) : (
				<ToursList data={data ?? []} />
			)}
		</>
	)
}

export default ToursPage
