import { Router } from "express";
import PageController from "../controller/PageController";

const router = Router()

router.get("/", PageController.page)

export default router