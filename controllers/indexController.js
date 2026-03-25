import messages from "../db.js"

const indexController = (req, res, next) => {
    try {
        res.render("index", {title : "Mini Messageboard", messages : messages});
    } catch (error) {
        next (error);
    }
};

export default indexController;