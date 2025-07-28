'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
	getActualTour,
	createTourResponse,
	createNewTour,
	getExistingTour,
} from '@/utils/action'
import TourInfo from './TourInfo'
import toast from 'react-hot-toast'

const NewTour = () => {
	const queryClient = useQueryClient()
	const {
		mutate,
		isPending,
		data: tour,
	} = useMutation({
		mutationFn: async destination => {
			const existingTour = await getExistingTour(destination)
			if (existingTour) return existingTour
			const newTour = await createTourResponse(destination)
			if (newTour) {
				await createNewTour({ tour: newTour })
				queryClient.invalidateQueries({ queryKey: ['tours'] })
				return newTour
			}
			toast.error(`Can't find this city...`)
			return null
		},
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const destination = Object.fromEntries(formData.entries())

		mutate(destination)
	}

	if (isPending) {
		return <span className='loading loading-lg'></span>
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='max-w-2xl'>
				<h2 className='mb-4'>Select destination</h2>
				<div className='join w-full'>
					<input
						type='text'
						className='join-item input input-bordered w-full'
						placeholder='city'
						name={'city'}
						required
					/>
					<input
						type='text'
						className='join-item input input-bordered w-full'
						placeholder='country'
						name={'country'}
						required
					/>
					<button type='submit' className='btn btn-primary join-item'>
						Generate Tour
					</button>
				</div>
			</form>
			<div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
		</>
	)
}

export default NewTour
