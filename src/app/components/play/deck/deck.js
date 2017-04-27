(function (angular) {

    angular.module('app').component('compDeck', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/deck/deck.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'cardFactory', controladorCompDeck],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDeck'
    });
    function controladorCompDeck($state, cardFactory) {
        var vm = this;
        vm.$onInit = function () {
            vm.deck = cardFactory.getDeck();
            for(var i=0;i<vm.deck.length;i++)
            console.log("deck: ", vm.deck[i].id, vm.deck[i].picture )
            vm.clase = 'formvirgin';
        };      

    }
})(angular)