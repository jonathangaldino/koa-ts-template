import Router from '@koa/router'
import UserController from '../controllers/user.controller'

const router: Router = new Router()

router
  .prefix('/users')
  .post('/', UserController.postUsers)
  .post('/auth', UserController.postAuth)

export default router
