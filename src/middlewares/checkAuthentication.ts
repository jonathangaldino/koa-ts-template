import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'

import config from '../config'
import { JWTDecoded } from '../types/auth.types'

const checkAuthentication = async (ctx: Context, next: Next) => {
  const { authToken } = ctx

  if (!authToken) {
    throw new Error(
      'Koa ctx.authToken wasnt set. Use checkTokenPresence middleware first!',
    )
  }

  const { TOKEN_SECRET } = config

  try {
    const content = <JWTDecoded>jwt.verify(authToken, TOKEN_SECRET, {
      ignoreExpiration: false,
    })

    ctx.authenticated = { email: content.email, token: authToken }
    await next()
  } catch (err) {
    ctx.status = 401

    // TODO: move this to a function, to centralize the handling
    if (err.name === 'TokenExpiredError') {
      ctx.body = { message: 'Token expired, authenticate again' }
    }
    if (err.name === 'JsonWebTokenError') {
      ctx.body = { message: 'Token invalid' }
    }
  }
}

export default checkAuthentication
