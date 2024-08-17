import { Router } from "express";
import { authenticateAPIKey } from "../security/auth";
import userRouter from "./UserRouter"

const router = Router()

router.use(authenticateAPIKey);

// somente para fins de teste
router.get("/", (req, res) => {
    res.status(200).json({ message: "API OK" })
})

router.use("/user", userRouter)

export default router 