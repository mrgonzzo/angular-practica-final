(function(angular) {

  angular.module('app').component('compPlay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/play/play.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controladorCompPlay],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compPlay'
});

function controladorCompPlay ($state){
  var vm = this;
 
}

})(angular)