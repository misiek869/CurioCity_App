'use client'

import { useQuery } from '@tanstack/react-query'
import ToursList from './ToursList'
import { getAllTours } from '@/utils/action'

const ToursPage = () => {
	const { data, isPending } = useQuery({
		queryKey: ['tours'],
		queryFn: () => getAllTours(),
	})

	console.log(data)
	return (
		<>
			{isPending ? (
				<span className='loading'></span>
			) : (
				<ToursList data={data} />
			)}
		</>
	)
}

export default ToursPage
