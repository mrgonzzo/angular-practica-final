(function (angular) {

    angular.module('app').component('compCard', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/card/card.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'cardFactory', controladorCompCard],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compCard',
        bindings: {
            itemCard: '<'
        }
    });
    function controladorCompCard($state, cardFactory) {
        var vm = this;
       vm.actionPlay=function(itemCard){
         
            itemCard.picture='v'+itemCard.id+'.jpg';
             console.log('actionPlay',itemCard.id);
        }
        
    }

})(angular);