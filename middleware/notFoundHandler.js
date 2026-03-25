import NotFoundError from "../errors/NotFoundError.js";

const notFoundHandler = (req, res, next) => {
    const err = new NotFoundError(`The path ${req.originalUrl} doesn't exist`);

    next(err);
}

export default notFoundHandler;