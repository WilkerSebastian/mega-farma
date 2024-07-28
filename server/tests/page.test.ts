import request from "supertest"
import { app, lt } from "../src/index"

describe("Requisição para a rota /", () => {
    afterAll(() => lt.close())
    it("verificando se status da requisição a / foi status 200", async() => {

        const res = await request(app.server).get("/")

        expect(res.status).toBe(200)

    })
})