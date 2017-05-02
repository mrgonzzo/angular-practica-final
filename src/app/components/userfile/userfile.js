(function (angular) {

    angular.module('app').component('compUsfile', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/userfile/userfile.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'userFactory', controllerCompUsfile],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compUsfile'
    });
    function controllerCompUsfile($state, userFactory) {
        var vm = this;
        vm.userform = {};
        user = userFactory.getUser();
        console.log('user', user, 'vm.userform', vm.userform, 'vm.userform.name', vm.userform.name)
        vm.addForm = function () {
            vm.js_class_form = 'formvirgin';
            if (!vm.userform.name) {
                vm.js_class_name = 'js_class_ko';
                vm.js_class_form ='js_class_ko';
            } else {
                vm.js_class_name = 'js_class_ok';
                user.name = vm.userform.name;
                if (!vm.userform.email) {
                    vm.js_class_email = 'js_class_ko';
                    vm.js_class_form ='js_class_ko';
                } else {
                    vm.js_class_email = 'js_class_ok';
                    user.email = vm.userform.email;
                    console.log('vm.userform.avatar',vm.userform.avatar)
                    if (!vm.userform.avatar) {
                        vm.js_class_avatar = 'js_class_ko';
                        vm.js_class_form ='js_class_ko';
                    } else {
                        vm.js_class_avatar = 'js_class_ok';
                        vm.js_class_form ='js_class_ok';
                        user.avatar = vm.userform.avatar;
                        $state.go('play');
                    }
                }
            }
        };
}
})(angular)