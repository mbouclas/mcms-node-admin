module.exports = (function(App,Express,Package){
    var Route = App.Route;
    var names = {
        AdminHome : '/admin'
    };
    Route.set(names);
    Express.use('/admin',App.Auth.middleware.applyCSRF,require('./routes/login')(App,Route));
    Express.use('/admin',[App.Auth.middleware.applyCSRF,App.Auth.middleware.isAdmin,Package.adminUiLoader.middleware],require('./routes/index')(App,Route));
    Express.use(Route.use);

});
