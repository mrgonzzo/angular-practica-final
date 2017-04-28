(function (angular) {
    angular.module('app').factory('cardFactory', [cardFactory]);
    function cardFactory() {
        var module = {};
        var self = module;
        var cardarray = [
            { id: 1, part: 'a', picture: "v1.jpg", stat: 'faced' },
            { id: 2, part: 'a', picture: "v2.jpg", stat: 'faced' },
            { id: 3, part: 'a', picture: "v3.jpg", stat: 'faced' },
            { id: 4, part: 'a', picture: "v4.jpg", stat: 'faced' },
            { id: 5, part: 'a', picture: "v5.jpg", stat: 'faced' },
            { id: 6, part: 'a', picture: "v6.jpg", stat: 'faced' },
            { id: 7, part: 'a', picture: "v7.jpg", stat: 'faced' },
            { id: 8, part: 'a', picture: "v8.jpg", stat: 'faced' },
            { id: 9, part: 'a', picture: "v9.jpg", stat: 'faced' },
            { id: 10, part: 'a', picture: "v10.jpg", stat: 'faced' },
        ];
        var linkcard = function (list) {
            var i = 0;
            while (list.length) {
                list[i].part = 'b';
                i++;
            }
            return list
        };

        pararray =linkcard(cardarray);
        cardarray.push.apply(cardarray, pararray);

        module.getDeck = function () {
            return cardarray;
        };



        return module;
    };
})(angular);


/*module.getcardById = function (_idcard_) {
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
        };*/