(function(){
    var appAngular = angular.module("MainModule")

    var MainController = function(scope,interval,location){

        //CRIAMOS UMA FUNÇÃO QUE VAIPAENAS EFETUAR O DECREMENTO DADO
        //VARIAVEL coutdown
        var decrementCountdown = function(){
            scope.coutdown -= 1;
            if(scope.coutdown < 1){
                scope.search(scope.username)
            }
        }
        

        //CRIAMOS UMA VARIAVEL QUE SERÁ RESONSAVEL POR NOS DISSER QUE O USUARIO
        //CLICOU NO BOTAO, OU SE NÃO E ASSIM APAGAR O CONTADOR DA TELA
        var countdownInterval = null
        var startCountdown = function(){
            //IREMOS USA UM INTERVALO DE 1seg PARA CADA INTERAÇAÕ COM A FUNÇÃO DE 
            //DECREMENTO
            countdownInterval = interval(decrementCountdown,1000,scope.coutdown);
        }

        scope.search = function(username){
            if(countdownInterval){
                //CANCELAMOS A CONSULTA POR INTERVALO
                interval.cancel(countdownInterval);
                scope.coutdown = null;
            }
            
            //AQUI NOS VAMOS DIRECIONAR O USUARIO PARA A PAGINA DE RESULTADO
            //ASSIM QUE ELE CLICAR NA BUSCA
            location.path("/user/" + username);
        }

        scope.username = "Angular"
        //CRIAMOS UMA VARIAVEL RESPONSAVEL PELO NUMERO TOTAL  DO CONTADOR
        scope.coutdown = 5;
        startCountdown();

    }

    //INJETOMOS DOIS  NOVOS SERVIÇOS
    //INTERVAL: USA O INTERVAL E O SETTIMEOUT DO JAVASCRIPT
    //LOG: HABILITA OS LOGS NA SUA APLICAÇÕA, USANDO O CONSOLE.LOG PARA APRESENTAR 
    //AS INFORMAÇÕES
    //anchorScroll: AJUDA A EFETUAR SCROLLS COM A PAGINA PARA LEVAR O USUARIO A ALGUM LOCAL
    //QUE DESEJAMOS
    //location: AJUDA A LOCALIZAR ELEMENTOS HTML NO SEU DOM

    //QUANDO COMEÇAMOS A USAR O SERVICE.JS NOS PARAMOS DE USAR O $http NA CONTROLLER 
    appAngular.controller("MainController",["$scope","$interval","$location", MainController])
}());