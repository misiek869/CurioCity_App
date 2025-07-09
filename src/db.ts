import postgres from 'postgres'
import { getRequiredEnvVar } from '../helperFunctions'

const sql = postgres(getRequiredEnvVar('DATABASE_URL'))

export default sql
