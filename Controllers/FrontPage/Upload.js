module.exports = (function(App,Package) {
    var FrontPageService = App.Services['admin'].FrontPage;
    var fs = require("fs-extra"),
        path = require('path');

    return {
        name: 'Upload',
        nameSpace: 'FrontPage',
        uploadFrontPageImage: uploadFrontPageImage
    };


    function uploadFrontPageImage(req,res,next){
        var file = req.files.uploadedFile;
        var StorageDir = path.join(App.Config.baseDir,App.Config.image.frontPage.dir);
        fs.move(file.path,StorageDir + file.originalname,{clobber : true},function(err,result){
            file.url = App.Config.image.frontPage.url + file.originalname;
            res.send(file);
        });
    }
});