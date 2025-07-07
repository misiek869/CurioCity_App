'use client'

import TourInfo from './TourInfo'

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()

	const formData = new FormData(e.currentTarget)

	const destination = Object.fromEntries(formData.entries())

	console.log(destination)
}

const NewTour = () => {
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
			<div className='mt-16'>
				<TourInfo />
			</div>
		</>
	)
}

export default NewTour
