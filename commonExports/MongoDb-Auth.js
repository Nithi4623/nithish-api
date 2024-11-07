import dotenv from 'dotenv'

dotenv.config();
export const AuthDb = process.env.MONGODB_URL
