(function (angular) {

    angular.module('app').component('compDeck', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/deck/deck.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', '$timeout', 'cardFactory', controladorCompDeck],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDeck'
    });
    function controladorCompDeck($state, $timeout, cardFactory) {
        var vm = this;


        vm.flop = function (deck) {
            var i = 0;

            for (i; i < deck.length; i++) {
                deck[i].picture = "back.jpg";
                deck[i].stat = 'backed';
            }
            return deck;
        };

        vm.$onInit = function () {
            vm.counter = 0;
            vm.deck = angular.copy(cardFactory.getDeck());
            $timeout(function () {
                vm.deck = vm.flop(vm.deck);
            }, 10000);
        };
    }
})(angular)



/**
 * switch (vm.deck[i].stat) {
            case 'faced':
                alert("Selected Case Card is 1");
                break;
            case 'backed':
                alert("Selected Case Number is 2");
                break;
            case 'solved':
                alert("Selected Case Number is 2");
                break;

        }
 */