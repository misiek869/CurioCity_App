export function getRequiredEnvVar(name: string): string {
	const value = process.env.DATABASE_URL
	if (!value) throw new Error(`Missing required environment variable: ${name}`)
	return value
}
