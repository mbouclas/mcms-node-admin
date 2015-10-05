module.exports = (function(App,Route,Package){
    var express = require('express');
    var router = express.Router();
    var Controllers = App.Controllers.admin;

    router.post('/uploadFrontPageImage' ,Controllers['FrontPage/Upload'].uploadFrontPageImage);


    return router;
});