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
        var turn = [];
        // -> Fisher–Yates shuffle algorithm
        var shuffleArray = function (deckarray) {
            var m = deckarray.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = deckarray[m];
                deckarray[m] = deckarray[i];
                deckarray[i] = t;
            }

            return deckarray;
        };

        var linkcard = function (cardarray) {

            var barray = angular.copy(cardarray);
            for (var i = 0; i < barray.length; i++) {
                barray[i].part = 'b';
            }
            /*while (barray.length) {
                console.log(barray.length,i,barray[i].part);
                console.log('*************************************************************');
                barray[i].part = 'b';
                i = i+1;
            }*/
            return barray
        };
        var pararray = linkcard(cardarray);
        cardarray.push.apply(cardarray, pararray);
        module.getDeck = function () {
            shuffleArray(cardarray);
            return cardarray;
        };
        module.getTurn = function () {
            return turn;
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