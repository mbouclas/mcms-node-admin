module.exports = (function(App,Connection,Package,privateMethods){
    var fs = require('fs');
    return function(){
        return JSON.parse(fs.readFileSync(App.Config.baseDir + App.Config.view.frontPageLayout,'utf8'));
    }
});