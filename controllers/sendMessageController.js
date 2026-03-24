const getMessageController = (req, res, next) => {
    try{
        res.render("form");

    } catch (error) {
        next(error);

    }
}

export default getMessageController;