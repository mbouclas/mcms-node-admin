module.exports = (function(App,Route,Package){
    var express = require('express');
    var router = express.Router();
    var Controllers = App.Controllers.admin;

    router.post('/get' ,Controllers['FrontPage/Layout'].get);
    router.post('/reload' ,Controllers['FrontPage/Layout'].reload);
    router.post('/update' ,Controllers['FrontPage/Layout'].update);

    return router;
});