module.exports = (function(App){
    var colors = require('colors');

    function command(){
        this.name = 'admin:addUser';
        this.description = 'Adds a new user via command line';
        this.options = {};
    }

    command.prototype.fire = function(callback){
        console.log(colors.green('command ' + this.name + 'fired'));
        callback(null,true);
    };

    return command;
});