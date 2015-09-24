module.exports = (function(App,Connection,Package,privateMethods){
    return function(){
        App.frontPageLayout = require(App.Config.baseDir + App.Config.view.frontPageLayout);
    }
});