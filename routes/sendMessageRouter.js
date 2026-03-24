import { Router } from 'express';
import getMessageController from '../controllers/sendMessageController.js';

const sendMessageRouter = Router();

sendMessageRouter.get("/", getMessageController);

export default sendMessageRouter;
