import UserSchema from '../../database/schemas/user.schema'
import { User as User } from '../../types/user.types'
import { generateToken, hashPassword } from '../auth'

export type Input = {
  name: string
  email: string
  unhashedPassword: string
}

interface Output extends Partial<User> {
  token: string
}

const createUser = async ({ name, email, unhashedPassword }: Input) => {
  const userExists = await UserSchema.findOne({ email })

  if (userExists) {
    throw new Error('User already exists')
  }

  // create user
  const user = new UserSchema({
    name,
    email,
    password: hashPassword(unhashedPassword),
  })
  await user.save()

  const output: Output = {
    name: user.name,
    email: user.email,
    token: generateToken({ email: user.email }),
  }

  return output
}

export default createUser
