module.exports = (function(App,Route){
    var express = require('express');
    var router = express.Router();
    var names = {
        AdminLogin : '/login'
    };
    Route.set(names,'admin');

    router.get('/login' ,function(req, res, next) {
        res.render('partials/loginForm.html', { title: 'Admin', flash : req.flash() });
    });

    router.post('/login',App.Auth.middleware.applyCSRF,App.Auth.loginAdmin);

    return router;
});