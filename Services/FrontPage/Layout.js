module.exports = (function(App,Package){
    var defaultDB = App.Config.database.default,
        Connection = App.Connections[defaultDB],
        privateMethods = {

        };



    return {
        name : 'FrontPage',
        nameSpace : 'Layout',
        get : require('./Helpers/get')(App,Connection,Package,privateMethods),
        load : require('./Helpers/load')(App,Connection,Package,privateMethods),
        reload : require('./Helpers/reload')(App,Connection,Package,privateMethods),
        update : require('./Helpers/update')(App,Connection,Package,privateMethods),
        fetch : require('./Helpers/fetch')(App,Connection,Package,privateMethods)
    };
});