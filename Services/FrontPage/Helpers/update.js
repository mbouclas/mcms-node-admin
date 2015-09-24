module.exports = (function(App,Connection,Package,privateMethods){
    var fs = require('fs');
    return function(data){
        var file = App.Config.baseDir + App.Config.view.frontPageLayout;
        fs.writeFileSync(file,data,{encoding:'utf8'});
        App.frontPageLayout = fs.readFileSync(file,'utf8');
    }
});