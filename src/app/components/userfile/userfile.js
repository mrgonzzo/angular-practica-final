(function (angular) {

    angular.module('app').component('compUsfile', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/userfile/userfile.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$timeout', '$state', 'userFactory', controllerCompUsfile],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compUsfile'
    });
    function controllerCompUsfile($timeout, $state, userFactory) {
        var vm = this;
         goPlay = function () {
            $state.go('play');
        };
        vm.userform = {};
        user = userFactory.getUser();
        vm.addForm = function () {
            if (!vm.userform.name) {
                vm.js_class_name = 'js_class_ko';
                vm.message = 'Pon tu nombre';
                vm.js_class_message='js_text_ko';
            } else {
                vm.js_class_name = 'js_class_ok';
                user.name = vm.userform.name;
                vm.message = '';
                if (!vm.userform.email) {
                    vm.js_class_email = 'js_class_ko';
                    vm.message = 'Por favor, '+vm.userform.name+', escribe tu email habitual';
                    vm.js_class_message='js_text_ko';
                } else {
                    vm.js_class_email = 'js_class_ok';
                    user.email = vm.userform.email;
                    vm.message = '';
                    if (!vm.userform.avatar) {
                        vm.js_class_avatar = 'js_class_ko js_text_ko';
                        vm.message = 'Por favor, '+vm.userform.name+', elige un avatar';
                        vm.js_class_message='js_text_ko';
                    } else {
                        vm.js_class_avatar = 'js_text_ok js_text_ok';
                        user.avatar = vm.userform.avatar;
                        vm.message = 'Genial, disfruta';
                        vm.js_class_message='js_text_ok';
                        $timeout(goPlay, 2000);
                    }
                }
            }
            
        };
    }
})(angular)