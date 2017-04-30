(function (angular) {

    angular.module('app').component('compUsfile', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/userfile/userfile.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state','userFactory', controllerCompUsfile],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compUsfile'
    });
    function controllerCompUsfile($state,userFactory) {
        var vm = this;

           vm.allusers = userFactory.getuser();
        //esto tiene que estar en la factoria
        vm.addForm = function () {
            var user = {};
            vm.clase = 'formvirgin';
            if (!vm.name || !vm.email) {
                vm.clase = 'formko';
            }
            else {
            vm.clase = 'formok'
                user.name = vm.name;
                user.email = vm.email;
                switch (vm.picture) {
                    case '1':
                        pic = 'australiano';
                        break;
                    case '2':
                        pic = 'acuatico';
                        break;
                    case '3':
                        pic = 'europeo';
                        break;
                }
                user.picture = pic;
                user.id = vm.allusers.length;
                vm.allusers.push(user);
            };
        };



        
    }
})(angular)