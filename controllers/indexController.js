const indexController = (req, res, next) => {
    try {
        res.render("index", {title : "Mini Messageboard"});
    } catch (error) {
        next (error);
    }
};

export default indexController;