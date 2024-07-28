import { Router } from "express";
import { authenticateAPIKey } from "../security/auth";

const router = Router()

router.use(authenticateAPIKey);

// somente para fins de teste
router.get("/", (req, res) => {
    res.status(200).json({ message: "API OK" })
})

export default router 