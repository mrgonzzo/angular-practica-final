(function (angular) {

  angular.module('app').component('compWin', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/win/win.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$timeout', 'userFactory', 'scoreFactory', controllerCompWin],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compWin'
  });

  function controllerCompWin($state, $timeout, userFactory, scoreFactory) {
    var vm = this;
    
    vm.goToPlay = function () {
      $state.go('play');
    }
    
  };

})(angular)