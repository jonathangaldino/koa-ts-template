import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import applyRoutes from './routes'
import centralizedErrorHandler from './businesses/error-handler'

const app = new Koa()

app.use(bodyParser())

// Apply each route
applyRoutes(app)

app.on('error', centralizedErrorHandler)

export default app
