import UserRouter from './user.routes'
import Koa from 'koa'

const applyRoutes = (app: Koa) => {
  app.use(UserRouter.routes())
}

export default applyRoutes
