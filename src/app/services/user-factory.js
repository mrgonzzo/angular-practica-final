(function (angular) {
    angular.module('app').factory('userFactory', [userFactory]);
    function userFactory() {
        var module = {};
        var self = module;
        var users=[];
       //var clickEnabled = true;
        module.getUsers = function () {
            return users;
        };
        /*module.getClickEnabled=function(){
            return clickEnabled;
        };*/
        return module;
    };
})(angular);
