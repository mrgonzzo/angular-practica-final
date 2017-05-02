(function (angular) {

  angular.module('app').component('compPlay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/play/play.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$timeout', 'userFactory', 'scoreFactory', controllerCompPlay],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compPlay'
  });

  function controllerCompPlay($state, $timeout, userFactory, scoreFactory) {
    var vm = this;
    vm.score = scoreFactory.getScore();
    vm.goToPlay = function () {
      $state.go('play', {}, { reload: true });
    }
    vm.user = userFactory.getUser();
  };

})(angular)