module.exports = (function(App){
    var express = require('express');
    var miniApp = express();
    var async = require('async');
    var path = require('path');
    var ENV = App.Config.env;
    var configLoader = require("mcms-node-config-loader").setEnv(App.Config.environments);
    var Command = App.Command(App);
    var uiLoader = require('./UiLoader/uiLoader')(App);
    var lo = require('lodash');


    function admin(){
        this.App = miniApp;
        this.packageName = 'admin';
        if (typeof App.Config[this.packageName] == 'undefined'){ //config not published yet
            this.Config = configLoader.loadConfig(path.join(__dirname,'Config'));
            App.Config = lo.merge(this.Config,App.Config);
        } else {
            this.Config = App.Config[this.packageName];//Config published
        }

        if (App.CLI){
            var commandFolder = __dirname + '/bin/Command/';
            //NON express code goes here. Commander does not load express
            Command.registerCommand([
                commandFolder + 'addUser'
            ]);
            return;
        }

        this.adminUiLoader = uiLoader;
        var Theme = require(App.Config.admin.theme)(App,this,miniApp);

        miniApp.set('views', Theme.viewsDir);
        miniApp.use(express.static(Theme.publicDir));
        this.adminModule = Theme.adminPackages;


        App.Lang.add({
            directory : __dirname + '/Lang'
        });

        miniApp.on('mount', function (parent) {
            console.log('Admin Mounted');//parent is the main app
        });

        App.viewEngine.registerTemplates(Theme.viewsDir, miniApp);
        miniApp.use(function (req, res, next) {
            var locale = req.session.locale || App.Config.app.locale;
            res.locals.Lang = App.Lang;
            res.locals.Config = App.Config;
            res.locals.Translations = {
                userPanel : App.Lang.translations[locale].userPanel
            };
            res.locals.loadFilesFrom = (ENV == 'development') ? 'devFiles' : 'files';
            res.locals.User = req.user;
            next();
        });
        require('./routes')(App, miniApp,this);
        App.server.use(miniApp);

    }


    return new admin();
});