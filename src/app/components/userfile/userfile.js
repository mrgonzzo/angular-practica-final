(function (angular) {

    angular.module('app').component('compUsfile', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/userfile/userfile.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', controllerCompUsfile],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compUsfile'
    });
    function controllerCompUsfile($state) {
        var vm = this;
        
    }
})(angular)