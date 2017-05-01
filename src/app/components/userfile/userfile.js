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
          
           vm.allusers = userFactory.getUsers();
        //esto tiene que estar en la factoria
        vm.addForm = function () {
            user={};
            vm.clase = 'formvirgin';
            if (!vm.name || !vm.email) {
                vm.clase = 'formko';
            }
            else {
            vm.clase = 'formok'
                user.name = vm.name;
                user.email = vm.email;
                pic='';
                switch (vm.avatar) {
                    case '1':
                        avatar = 'Bat.jpg';
                        break;
                    case '2':
                        avatar = 'goku.jpg';
                        break;
                    case '3':
                        avatar = 'Terminator.jpg';
                        break;
                }
                user.avatar = avatar;
                user.id = vm.allusers.length;
                vm.allusers.push(user);
                $state.go('play')
            };
            console.log('vm.allusers',vm.allusers);
        };



        
    }
})(angular)