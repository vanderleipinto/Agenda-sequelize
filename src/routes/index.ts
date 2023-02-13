import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SobreController from "../controllers/sobreController";

const router = Router();

router.get("/", PageController.home);
router.get("/adicionar", PageController.adicionar);
router.get("/deletar", PageController.deletar);

router.get("/", SobreController.sobre);

export default router;
