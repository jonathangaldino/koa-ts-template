import dotenv from 'dotenv-safe'

dotenv.config()

interface AppConfig {
  PORT: string
  DATABASE_URL: string
  TOKEN_SECRET: string
}

const config: AppConfig = {
  PORT: <string>process.env.PORT,
  DATABASE_URL: <string>process.env.MONGO_URL,
  TOKEN_SECRET: <string>process.env.TOKEN_SECRET,
}

export default config
