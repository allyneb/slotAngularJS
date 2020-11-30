var app = angular.module("app", ['ngDialog']);

app.controller('Controller', [
    '$scope',
    '$rootScope', 'ngDialog',
    function (scope, rootScope, ngDialog) {
        ;
        scope.credito = 0;
        scope.aux = 0;
        scope.aposta = 1;
        scope.nSort = 0;
        scope.slt1;
        scope.slt2;
        scope.slt3;

        scope.aleatorio = function (inferior, superior) {
            numPossibilidades = superior - inferior;
            aleat = Math.random() * numPossibilidades;
            aleat = Math.floor(aleat);
            return parseInt(inferior) + aleat;
        };

        scope.apostaMenos = function () {
            if (scope.aposta > 1) {
                scope.aposta--;
                document.getElementById("aposta").value = "R$ " + scope.aposta;
            }
        };

        scope.apostaMais = function () {
            if (scope.aposta < 10) {
                scope.aposta++;
                document.getElementById("aposta").value = "R$ " + scope.aposta;
            }
        };

        scope.verificaPremio = function () {
            if (scope.slt1 == 1 && scope.slt2 == 3 && scope.slt3 == 2) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 1 && scope.slt2 == 2 && scope.slt3 == 3) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 2 && scope.slt2 == 3 && scope.slt3 == 1) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 3 && scope.slt2 == 2 && scope.slt3 == 1) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 3 && scope.slt2 == 1 && scope.slt3 == 2) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 2 && scope.slt2 == 1 && scope.slt3 == 3) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 2;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 2 + "."
                );
            }

            if (scope.slt1 == 1 && scope.slt2 == 1 && scope.slt3 == 1) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 5;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 5 + "."
                );
            }

            if (scope.slt1 == 2 && scope.slt2 == 2 && scope.slt3 == 2) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 10;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 10 + "."
                );
            }

            if (scope.slt1 == 3 && scope.slt2 == 3 && scope.slt3 == 3) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 20;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 20 + "."
                );
            }

            if (scope.slt1 == 4 && scope.slt2 == 4 && scope.slt3 == 4) {
                scope.aposta = parseInt(scope.aposta);
                scope.credito = scope.credito + scope.aposta * 50;
                document.getElementById("credito").value = "R$ " + scope.credito;
                window.alert(
                    "Parabéns, você ganhou um prêmio de R$ " + scope.aposta * 50 + "."
                );
            }
        };

        scope.jogar = function () {
            if (scope.credito < 1 || scope.credito < scope.aposta) {
                scope.aux = window.prompt(
                    "Coloque mais créditos e, por favor, digite a quantidade em R$:",
                    "1"
                );
                scope.aux = parseInt(scope.aux);
                scope.credito = parseInt(scope.credito);
                scope.credito = scope.credito + scope.aux;
                document.getElementById("credito").value = "R$ " + scope.credito;
            } else {
                if (scope.credito > 0 && scope.credito >= scope.aposta) {
                    scope.credito = scope.credito - scope.aposta;
                    document.getElementById("credito").value = "R$ " + scope.credito;
                    document.getElementById("fruta1").src = "img/roleta.gif";
                    document.getElementById("fruta2").src = "img/roleta.gif";
                    document.getElementById("fruta3").src = "img/roleta.gif";

                    nSort = scope.aleatorio(1, 4);
                    switch (nSort) {
                        case 1:
                            cont = setTimeout(
                                "document.getElementById('fruta1').src = 'img/uva.png'",
                                4000
                            );
                            scope.slt1 = 1;
                            break;
                        case 2:
                            cont = setTimeout(
                                "document.getElementById('fruta1').src = 'img/laranja.png'",
                                4000
                            );
                            scope.slt1 = 2;
                            break;
                        case 3:
                            cont = setTimeout(
                                "document.getElementById('fruta1').src = 'img/morango.png'",
                                4000
                            );
                            scope.slt1 = 3;
                            break;
                    }

                    nSort = scope.aleatorio(1, 4);
                    switch (nSort) {
                        case 1:
                            cont = setTimeout(
                                "document.getElementById('fruta2').src = 'img/uva.png'",
                                6000
                            );
                            scope.slt2 = 1;
                            break;
                        case 2:
                            cont = setTimeout(
                                "document.getElementById('fruta2').src = 'img/laranja.png'",
                                6000
                            );
                            scope.slt2 = 2;
                            break;
                        case 3:
                            cont = setTimeout(
                                "document.getElementById('fruta2').src = 'img/morango.png'",
                                6000
                            );
                            scope.slt2 = 3;
                            break;
                    }

                    nSort = scope.aleatorio(1, 4);
                    switch (nSort) {
                        case 1:
                            cont = setTimeout(
                                "document.getElementById('fruta3').src = 'img/uva.png'",
                                7000
                            );
                            scope.slt3 = 1;
                            break;
                        case 2:
                            cont = setTimeout(
                                "document.getElementById('fruta3').src = 'img/laranja.png'",
                                7000
                            );
                            scope.slt3 = 2;
                            break;
                        case 3:
                            cont = setTimeout(
                                "document.getElementById('fruta3').src = 'img/morango.png'",
                                7000
                            );
                            scope.slt3 = 3;
                            break;
                    }

                    cont = setTimeout("verificaPremio()", 9000);
                }
            }
        };
    }
]);
