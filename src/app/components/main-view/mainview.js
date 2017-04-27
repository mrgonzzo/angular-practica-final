(function(angular) {

  angular.module('app').component('compMainview', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/main-view/mainview.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controladorCompMainView],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compMainview'
});

function controladorCompMainView ($state){
  var vm = this;
  vm.goToPlay=function(){
    $state.go('play');
  }
}

})(angular)