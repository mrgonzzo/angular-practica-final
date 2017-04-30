(function (angular) {

    angular.module('app').component('compCard', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/card/card.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$timeout', '$state', 'cardFactory', controladorCompCard],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compCard',
        bindings: {
            itemCard: '<'
        }
    });

    function controladorCompCard($timeout, $state, cardFactory) {
        var vm = this;
        var crdturn = cardFactory.getTurn();
        vm.flopItemCard = function (item) {
            item.picture = 'back.jpg';
            item.stat = 'backed';
            return item;
        };
        vm.SolveItemCard = function (item) {
            item.stat = 'solve';
            return item;
        };
        vm.flopDuo = function (turn) {
            itemCard = vm.flopItemCard(turn[0]);
            itemCard = vm.flopItemCard(turn[1]);
            turn.length = 0;
        }
        vm.solveDuo = function (turn) {
            itemCard = vm.SolveItemCard(turn[0]);
            itemCard = vm.SolveItemCard(turn[1]);
            turn.length = 0;
        }
        vm.evaluateTurn = function (turn) {
            if ((turn[0].id === turn[1].id)) {
                $timeout(function () {
                    vm.solveDuo(turn);
                }, 2000);
            } else {
                $timeout(function () {
                    vm.flopDuo(turn);
                }, 2000);
            }
        };
        vm.actionPlay = function (itemCard) {
            itemCard.picture = 'v' + itemCard.id + '.jpg';
            if (crdturn.length < 2) {
                crdturn.push(itemCard);
                if (crdturn.length === 2) {
                    vm.evaluateTurn(crdturn);
                }
            }
        };

    }
})(angular);


