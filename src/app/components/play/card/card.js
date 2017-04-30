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
        vm.flopItemCard = function (item) {
            item.picture = 'back.jpg';
            item.stat = 'backed';
           // vm.clickEnabled=scoreFactory.getClickEnabled()
           // vm.clickEnabled = true;
            return item;
        };
        vm.solveItemCard = function (item) {
            item.stat = 'solve';
            return item;
        };
        vm.flopDuo = function (turn) {
            itemCard = vm.flopItemCard(turn[0]);
            itemCard = vm.flopItemCard(turn[1]);
            var scoreCard = scoreFactory.getScore();
            scoreCard[1] = scoreCard[1] + 1;
          //  vm.clickEnabled=scoreFactory.getClickEnabled()
          //  vm.clickEnabled = true;
            
        //    console.log('vm.clickEnabled flop', vm.clickEnabled);
        //    console.log('scoreFactory.getClickEnabled() flop', scoreFactory.getClickEnabled());
            turn.length = 0;
        }
        vm.solveDuo = function (turn) {
            itemCard = vm.solveItemCard(turn[0]);
            itemCard = vm.solveItemCard(turn[1]);
            var scoreCard = scoreFactory.getScore();
            scoreCard[0] = scoreCard[0] + 1;
            turn.length = 0;
          //  vm.clickEnabled=scoreFactory.getClickEnabled()
          //  vm.clickEnabled = true;
            
         //   console.log('vm.clickEnabled solve', vm.clickEnabled);
         //   console.log('scoreFactory.getClickEnabled() solve', scoreFactory.getClickEnabled());
        }
        vm.evaluateTurn = function (turn) {
            //console.log('clickEnabled evaluateTurn', vm.clickEnabled);
            if ((turn[0].id === turn[1].id)) {
                $timeout(function () {
                    vm.solveDuo(turn);
                }, 2000);
            } else {
                $timeout(function () {
                    vm.flopDuo(turn);
                }, 2000);
            }

         //   console.log('clickEnabled evaluateTurn 2', vm.clickEnabled);
        };
        vm.actionPlay = function (itemCard) {
            console.log('clickEnabled actionPlay', vm.clickEnabled);
            itemCard.picture = 'v' + itemCard.id + '.jpg';
            if (crdturn.length < 2) {
                crdturn.push(itemCard);
                if (crdturn.length === 2) {
           //         vm.clickEnabled = false;
                    vm.evaluateTurn(crdturn);
                }
            }
        };

    }
})(angular);


