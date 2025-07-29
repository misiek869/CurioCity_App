import TourInfo from '@/components/TourInfo'
import { generateTourImage, getSingleTour } from '@/utils/action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const SingleTourPage = async ({ params }: { params: { id: string } }) => {
	const tour = await getSingleTour(params.id)

	if (!tour) {
		redirect('/tours')
	}

	const tourImg = await generateTourImage({
		city: tour.city,
		country: tour.country,
	})

	return (
		<div>
			<Link href={'/tours'} className='btn btn-secondary capitalize mb-12'>
				back to tours
			</Link>
			{tourImg ? (
				<div>
					<Image
						src={tourImg}
						width={300}
						height={300}
						className='shadow-xl rounded-xl mb-12 h-96 w-96'
						alt='panoramic view of the city'
						priority
					/>
				</div>
			) : null}
			<TourInfo tour={tour} />
		</div>
	)
}

export default SingleTourPage
