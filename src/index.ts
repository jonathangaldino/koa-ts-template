import config from './config'
import app from './server'
import database from './database'

const startApp = async () => {
  await database.connectDatabase()

  app.listen(config.PORT, () =>
    console.log(
      `template server is running at port ${config.PORT} - happy hunting! ;)`,
    ),
  )
}

startApp()
