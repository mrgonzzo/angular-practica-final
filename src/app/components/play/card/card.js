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
        //var crdturn=angular.copy()

        vm.crdturn = cardFactory.getTurn();
        //console.log('vm.crdturn',vm.crdturn);
        vm.actionPlay = function (itemCard) {
            //vm.crdturn.push(itemCard);
            itemCard.picture = 'v' + itemCard.id + '.jpg';
         //   console.log('vm.crdturn', vm.crdturn);
            //
            var l = vm.crdturn.length;
            ///console.log('l', l);
            if (vm.crdturn) {
                // crdturn.push(itemCard);
                 console.log('turn',vm.crdturn,'L',l);
                console.log('SI l')
            } else {
                // if ((cdrturn[0].id === cdrturn[1].id) && (cdrturn[0].part === cdrturn[1].part)) {
                console.log('NO l');
            }
        };
    }
})(angular);