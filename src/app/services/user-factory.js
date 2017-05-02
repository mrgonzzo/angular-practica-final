(function (angular) {
    angular.module('app').factory('userFactory', [userFactory]);
    function userFactory() {
        var module = {};
        var self = module;
        var user={name:'',email:'',avatar:''};
        module.getUser = function () {
            return user;
        };
        return module;
    };
})(angular);
