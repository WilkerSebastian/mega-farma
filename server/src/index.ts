import "reflect-metadata"
import 'dotenv/config'
import Application from './app/Application'
import cron from "node-cron"
import { UserService } from './service/UserService'

const app = new Application()

cron.schedule('0 0 * * *', async () => {

    const userService = new UserService();

    await userService.removeAllExpiredUsers()

});

const lt = app.start()!

export {app, lt}