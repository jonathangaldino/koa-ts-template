import { Context, Next } from 'koa'

const appAuthToken = 'x-auth-token'

const CheckTokenPresence = async (ctx: Context, next: Next) => {
  const { headers } = ctx

  try {
    const header = <string>headers[appAuthToken]

    if (!header) {
      throw new Error('Token not present')
    }

    if (!header || !header.length) {
      throw new Error('Token is invalid')
    }

    ctx.authToken = header

    await next()
  } catch (err) {
    ctx.body = { message: err.message }
    ctx.status = 401
  }
}

export default CheckTokenPresence
