import jwt from 'jsonwebtoken'

import config from '../../config'
import { User } from '../../types/user.types'
import { JWTEncode } from '../../types/auth.types'

const generateToken = (user: Partial<User>) => {
  const tokenData: JWTEncode = {
    email: <string>user.email,
  }

  const token = jwt.sign(tokenData, config.TOKEN_SECRET, {
    expiresIn: '1h',
  })

  return token
}

export default generateToken
