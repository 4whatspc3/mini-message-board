import express from 'express';
import path from 'path';
import indexRouter from './routes/indexRouter.js';
import sendMessageRouter from './routes/sendMessageRouter.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : true}));

app.use(logger);

app.use("/sendMessage", sendMessageRouter);

app.use("/", indexRouter);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, (error) => {

    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});