(function (angular) {
    angular.module('app').factory('cardFactory', [cardFactory]);
    function cardFactory() {
        var module = {};
        var self = module;
        var cardarray = [
            { id: 1, picture: "v1.jpg", stat: 'faced' },
            { id: 2, picture: "v2.jpg", stat: 'faced' },
            { id: 3, picture: "v3.jpg", stat: 'faced' },
            { id: 4, picture: "v4.jpg", stat: 'faced' },
            { id: 5, picture: "v5.jpg", stat: 'faced' },
            { id: 6, picture: "v6.jpg", stat: 'faced' },
            { id: 7, picture: "v7.jpg", stat: 'faced' },
            { id: 8, picture: "v8.jpg", stat: 'faced' },
            { id: 9, picture: "v9.jpg", stat: 'faced' },
            { id: 10, picture: "v10.jpg", stat: 'faced' },
        ];
 cardarray.push.apply(cardarray, cardarray);
        module.getDeck = function () {
           return cardarray;
        };

        module.getcardById = function (_idcard_) {
            var card = '';
            var idcard = parseInt(_idcard_)
            //es interesante usar firewalls
            if (!idcard) {
                return false;
            } //end firewall
            //con un while es mas rapido (no importa la posicion) while (len--)
            for (var i = 0; i < cardarray.length; i++) {
                //lo optimo es usar los tres iguales para comprobar tambien el tipo además del valor (más eficiente)
                if (idcard === cardarray[i].id) {
                    card = cardarray[i];
                }
            }
            return card;
        };

        return module;
    };
})(angular);