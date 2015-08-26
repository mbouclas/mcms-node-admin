module.exports = (function(App){
    return {
        modules : [],
        registerModules : registerModules,
        middleware : middleware
    };

    function registerModules(){
        var modules = [],
            SPs = App.serviceProviders.serviceProviders;
        for (var a in SPs){
            if (SPs[a].adminModule){
                var module = require(SPs[a].adminModule);

                if (SPs[a].baseFolder){
                    module.baseFolder = SPs[a].baseFolder;
                }
                modules.push(module);
            }
        }

        this.modules = modules;

        return modules;
    }

    function middleware(req,res,next){
        try {
            var modules = App.serviceProviders.serviceProviders.admin.adminUiLoader.registerModules();
            res.locals.adminModules = modules;
            res.locals.adminModulesJson = JSON.stringify(modules);
        }
        catch (e){
            console.log('uiLoader was not initialized');
        }

        next();
    }

});