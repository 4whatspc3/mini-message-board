import express from 'express';
import path from 'path';
import indexRouter from './routes/indexRouter.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';

const app = express();

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(process.cwd(), "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({extended : true}));

app.use(logger);

app.use("/", indexRouter);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, (error) => {

    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});