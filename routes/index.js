module.exports = (function(App,Route){
    var express = require('express');
    var router = express.Router();

    router.get('/' ,function(req, res, next) {
        res.render('partials/index.html', { title: 'Admin', flash : req.flash() });
    });

    router.get('/login' ,function(req, res, next) {
        res.render('partials/loginForm.html', { title: 'Admin', flash : req.flash() });
    });

    return router;
});