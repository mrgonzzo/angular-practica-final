(function(angular) {

  angular.module('app').component('compPlay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/play/play.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state','$timeout','scoreFactory',controladorCompPlay],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compPlay'
});

function controladorCompPlay ($state,$timeout,scoreFactory){
  var vm = this;
   vm.score = scoreFactory.getScore();
  console.log(vm.score);


 vm.goToPlay=function(){
    $state.go('play',  {}, {reload : true});
  }


};

})(angular)