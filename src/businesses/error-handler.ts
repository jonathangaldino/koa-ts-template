import { Context } from 'koa'

const centralizedErrorHandler = (err: any, ctx: Context) => {
  console.log(err, ctx)
}

export default centralizedErrorHandler
