import { Router } from 'express';
import {getMessageController, postMessageController} from '../controllers/sendMessageController.js';

const sendMessageRouter = Router();

sendMessageRouter.get("/", getMessageController);

sendMessageRouter.post("/", postMessageController);

export default sendMessageRouter;
