(function(){

    //NOS CRIAMOS O MODULO PRINCIPAL DO Angular
    //NELE NOS PODEMOS INJETAE DENTRO OD PARENTESES ALGUMAS FEATURES A MAIS PARA NOSSO
    //ANGULAR, COMO SE FOSEM using DO .NET
    //ESTE MODULO DEVERA SER CITADO NO ng-app NA VIEW
    var appAngular = angular.module("MainModule",[])

    var MainController = function(s,h){
        
        //PARA EFETUAR CONSUMO DE ITENS EM HTTP
        //DEVEMOS CRIAR AS VARIVEIS COM OS METODOS DE PROMISSE
        //QUE SERÃO EXECUTADOS COM OS RESULTADOS DA CONULTADO DA API
        var onSuccess = function(response){
            s.success = response.data;
        }

        var onError = function(response){
            s.error = 'Server not return data';
        }

        //AQU NOS CRIAMOS A FUNÇAÕ PARA PEGAR OS DADOS
        //AQUI NOS VAMOS PEGAR OS DADOS DO PROPRIO GITHUB
        h.get("https://api.github.com/users/JeanLLopes")
            .then(onSuccess,onError);    



        //CRIAMOS UMA VARIAVEL DO TIPO PESSOA
        var person = {
            firstName: "Jean",
            lastName: "Lopes",
            imageSource: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/121/127/3fcecf0.jpg"
        }

        s.message = "Hello Angular";
        //PARA DEIXARMOS A VARIAVEL VISIVEL EM NOSSO SCOPE USAMOS A 
        //VARIAVEL DE SCOPE
        s.person = person;

    }


    //AQUI NOS DEFINIMOS QUE DENTRO DO MODULE NOS VAMOS TE RUMA controller
    //DEPOIS NOS DAMOS UM NOME PARA A CONTROLLER
    //E PASSAMOS OS ITENS QUE IREMOS INJETAR NA CONTROLLER
    //COMO O $scope E O $http,
    //E COMO ULTIMO PARAMETRO NOS PASSAMOS O NOME DA VARIVEL QUE POSSUI A CONTROLLER
    appAngular.controller("MainController",["$scope","$http", MainController])


}());