import 'dotenv/config'
import "reflect-metadata"
import Application from './app/Application'

const app = new Application()

const lt = app.start()!

export {app, lt}