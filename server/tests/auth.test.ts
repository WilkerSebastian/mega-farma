import request from "supertest"
import { app, lt } from "../src/index"

describe("Requisição para a rota /api/", () => {
    afterAll(() => lt.close())
    it("verificando se com a chave certa", async() => {

        const res = await request(app.server).get("/api/").set({ 'x-api-key': process.env.API_KEY, Accept: 'application/json' })

        expect(res.status).toBe(200)

    })
    it("verificando com a chave errada", async() => {

        const res = await request(app.server).get("/api/").set({ 'x-api-key': process.env.API_KEY + "safjsiofi", Accept: 'application/json' })

        expect(res.status).toBe(403)

    })
})