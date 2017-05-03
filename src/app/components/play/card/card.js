(function (angular) {

    angular.module('app').component('compCard', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/card/card.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$timeout', '$state', 'scoreFactory', 'cardFactory', controllerCompCard],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compCard',
        bindings: {
            itemCard: '<'
        }
    });
    function controllerCompCard($timeout, $state, scoreFactory, cardFactory) {
        var vm = this;
        var crdturn = cardFactory.getTurn();
        var scoreCard = scoreFactory.getScore();
        vm.flopItemCard = function (item) {
            item.picture = 'back.jpg';
            item.stat = 'backed';
            return item;
        };
        vm.solveItemCard = function (item) {
            item.stat = 'solve';
            return item;
        };
        vm.flopDuo = function (turn) {
            itemCard = vm.flopItemCard(turn[0]);
            itemCard = vm.flopItemCard(turn[1]);
            scoreCard[1] = scoreCard[1] + 1;
            turn.length = 0;
        }
        vm.solveDuo = function (turn) {
            itemCard = vm.solveItemCard(turn[0]);
            itemCard = vm.solveItemCard(turn[1]);
            scoreCard[0] = scoreCard[0] + 1;
            turn.length = 0;
        }
        vm.evaluateTurn = function (turn) {
            if ((turn[0].id === turn[1].id)) {
                $timeout(function () {
                    vm.solveDuo(turn);
                    if (scoreCard[0] === 10) {
                        $state.go('win');
                    }
                }, 500);

            } else {
                $timeout(function () {
                    vm.flopDuo(turn);
                }, 1500);
            }
        };
        vm.actionPlay = function (itemCard) {
            if (crdturn.length < 2) {
                itemCard.picture = 'v' + itemCard.id + '.jpg';
                crdturn.push(itemCard);
                if (crdturn.length === 2) {
                    vm.enable = false;
                    vm.evaluateTurn(crdturn);
                }
            }
        };
    }
})(angular);


