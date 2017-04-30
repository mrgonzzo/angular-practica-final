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
        var crdturn = cardFactory.getTurn();
        vm.flopItemCard = function (item) {
            item.picture = 'back.jpg';
            item.stat = 'backed';
            return item;
        };
        vm.evaluateTurn = function (turn) {
            if ((crdturn[0].id === crdturn[1].id)) {
                //for(var i=0;)
                //vm.solveDuo(crdturn);
                itemCard.stat = 'solve';
                console.log('par encontrado, ocultamos la pareja,reseteamos crdturn y sumamos uno a ok');
                crdturn.length = 0;
            } else {
                 itemCard=vm.flopItemCard(crdturn[0]);
                 itemCard=vm.flopItemCard(crdturn[1]);
                //vm.flopItemCard(crdTurn[1]);

                console.log('par no encontrado, volteamos las cartas, sumamos una a ko y vaciamos crdturn');
                crdturn.length = 0;
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


