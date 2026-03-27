import { Router } from "express";
import {getIndexController, postIndexController} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexController);

indexRouter.post("/", postIndexController);

export default indexRouter;