import { Request, Response } from "express";
import { resolve } from "path"

export default class PageController {

    public static async page(req:Request, res:Response) {

        res.sendFile(resolve("../client/dist/index.html"))

    }

}