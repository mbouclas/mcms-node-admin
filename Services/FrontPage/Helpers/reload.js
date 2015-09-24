module.exports = (function(App,Connection,Package,privateMethods){
    var fs = require('fs');
    return function(){
        App.frontPageLayout = fs.readFileSync(App.Config.baseDir + App.Config.view.frontPageLayout,'utf8');
        return App.frontPageLayout;
    }
});