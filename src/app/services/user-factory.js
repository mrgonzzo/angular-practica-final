(function (angular) {
    angular.module('app').factory('userFactory', [userFactory]);
    function userFactory() {
        var module = {};
        var self = module;
        var ko = 0;
        var ok = 0;
        var user = [ok,ko];
       //var clickEnabled = true;
        module.getuser = function () {
            
            return user;
        };
        /*module.getClickEnabled=function(){
            return clickEnabled;
        };*/
        return module;
    };
})(angular);
