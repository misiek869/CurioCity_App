import TourInfo from '@/components/TourInfo'
import { getSingleTour } from '@/utils/action'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const SingleTourPage = async ({ params }: { params: string }) => {
	const tour = await getSingleTour(params.id)
	if (!tour) {
		redirect('/tours')
	}
	return (
		<div>
			<Link href={'/tours'} className='btn btn-secondary capitalize mb-12'>
				back to tours
			</Link>
			<TourInfo tour={tour} />
		</div>
	)
}

export default SingleTourPage
