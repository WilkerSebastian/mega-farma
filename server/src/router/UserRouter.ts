import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router()

router.post("/save", UserController.createUser)

router.patch("/validate/:id", UserController.validateUser)

export default router