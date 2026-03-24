import express from 'express';
import path from 'path';
import indexRouter from './routes/indexRouter.js';
import sendMessageRouter from './routes/sendMessageRouter.js';

const app = express();

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

app.use("/sendMessage", sendMessageRouter);

app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (error) => {

    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});