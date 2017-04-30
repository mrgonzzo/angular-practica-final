(function (angular) {
    angular.module('app').factory('scoreFactory', [scoreFactory]);
    function scoreFactory() {
        var module = {};
        var self = module;
        var ko = 0;
        var ok = 0;
        var score = [ok,ko];
       //var clickEnabled = true;
        module.getScore = function () {
            return score;
        };
        /*module.getClickEnabled=function(){
            return clickEnabled;
        };*/
        return module;
    };
})(angular);
