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

        // -> Fisher–Yates shuffle algorithm
        var shuffleArray = function (array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        };

       
        vm.$onInit = function () {
            vm.counter = 0;
            vm.deck = shuffleArray(cardFactory.getDeck());
        };
    };
})(angular)