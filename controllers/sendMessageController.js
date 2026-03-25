import messages from "../db.js";

const getMessageController = (req, res, next) => {
    try{
        res.render("form");

    } catch (error) {
        next(error);

    }
}

const postMessageController = (req, res, next) => {
    try {
        const { user, messageText } = req.body;

        messages.push({
            text : messageText,
            user,
            added : new Date(),
        });

        res.redirect("/");

    } catch (error) {
        next(error);
    }
}

export { getMessageController, postMessageController};