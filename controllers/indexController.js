import messages from "../db.js"

const getIndexController = (req, res, next) => {
    try {
        res.render("index", {title : "Mini Messageboard", messages : messages});
    } catch (error) {
        next (error);
    }
};

const postIndexController = (req, res, next) => {
    try {
        const { user, messageText } = req.body;

        messages.push({
            text : messageText,
            user,
            added : new Date()
        });

        res.redirect("/");
    } catch (error) {
        next(error);
    }
}

export {getIndexController, postIndexController};