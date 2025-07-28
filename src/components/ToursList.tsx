import React from 'react'
import TourCard from './TourCard'
import type { Tour } from '../../types'

type ToursListProps = {
	data: Tour[]
}

const ToursList = ({ data }: ToursListProps) => {
	if (data.length === 0)
		return <h4 className='text-xl'>Cant find any tours...</h4>
	return (
		<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
			{data.map(tour => {
				return <TourCard key={tour.id} tour={tour} />
			})}
		</div>
	)
}

export default ToursList
