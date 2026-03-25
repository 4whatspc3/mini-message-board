const indexController = (req, res, next) => {
    try {
        res.render("index", {title : "Mini Messageboard", 
            messages : [ {user : 'Jonas Kahnwald'}, 
                         {text : 'Death is forever inevitably before us'},
                         {added: new Date()}
                        ]});
    } catch (error) {
        next (error);
    }
};

export default indexController;