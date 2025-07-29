export type Tour = {
	id: string
	createdAt: Date
	updatedAt: Date
	city: string
	country: string
	title: string
	description: string
	image?: string | null
	stops: string[]
}
