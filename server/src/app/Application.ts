import express from "express"
import cookieParser from "cookie-parser"
import pagerouter from "../router/PageRouter"
import apirouter from "../router/ApiRouter"
import { resolve } from "path"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"
import { AppDataSource } from "../database/config/data-source"
import { IncomingMessage, Server, ServerResponse } from "http"

export default class Application {

    public server: express.Application

    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    public start() {

        try {

            const PORT = process.env.PORT

            AppDataSource.initialize()

            const listener = this.server.listen(PORT, () => {

                if (process.env.NODE_ENV === "development")
                    console.log(`servidor rodando na porta ${PORT}`);
            
            })

            return listener;
            
        } catch (error) {

            console.log(error)
            
        }

    }

    private middlewares() {

        this.server.use(helmet())

        this.server.use(express.json())
        this.server.use(express.urlencoded({ extended: true }))
        this.server.use(cookieParser(process.env.SECRET_COOKIE))

        this.server.use(cors())
        this.server.use(morgan("combined"))

    }

    private routes() {

        this.server.use(pagerouter)
        this.server.use("/api", apirouter)

        this.server.use("/assets", express.static(resolve("../client/dist/assets")))

    }

}