module.exports = (function(App,Package) {
    var FrontPageService = App.Services['admin'].FrontPage;

    return {
        name: 'Layout',
        nameSpace: 'FrontPage',
        update: update,
        reload : reload,
        get : get,
        uploadImageForFrontPage : uploadImageForFrontPage
    };


    function get(req,res,next){
        res.send(FrontPageService.fetch());
    }

    function update(req,res,next){
        //write file?
        FrontPageService.update(req.body.data);
        res.send({success : true});
    }

    function uploadImageForFrontPage(req,res,next){
        res.send(req.files.uploadedFile);
        //App.Helpers.handleImageUpload(file,App.Config.image.frontPage,item,next);
    }

    function reload(req,res,next){
        FrontPageService.reload();
        res.send({success:true});
    }
});