(function (angular) {

    angular.module('app').component('compDeck', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/deck/deck.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', '$timeout', 'scoreFactory', 'cardFactory', controllerCompDeck],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDeck'
    });
    function controllerCompDeck($state, $timeout, scoreFactory, cardFactory) {
        var vm = this;
        //vm.clickEnabled = scoreFactory.getClickEnabled()

        vm.flop = function (deck) {
            var i = 0;
      //      vm.clickEnabled = true;
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
        //        console.log('compDeck scoreFactory.getClickEnabled()', scoreFactory.getClickEnabled())
        //        console.log('compDeck ClickEnabled', vm.clickEnabled);
            }, 10000);
        };
    }
})(angular)