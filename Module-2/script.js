angular.module('MainModule',[])

    //PARA USAMOS OS METODOS HTTP NOS INJETAMOS O ESCOPO $HTTP
    //NA FUNÇÃO
    .controller('MainController', function($scope, $http){

        //PARA EFETUAR CONSUMO DE ITENS EM HTTP
        //DEVEMOS CRIAR AS VARIVEIS COM OS METODOS DE PROMISSE
        //QUE SERÃO EXECUTADOS COM OS RESULTADOS DA CONULTADO DA API
        var onSuccess = function(response){
            $scope.success = response.data;
        }

        var onError = function(response){
            $scope.error = 'Server not return data';
        }

        //AQU NOS CRIAMOS A FUNÇAÕ PARA PEGAR OS DADOS
        //AQUI NOS VAMOS PEGAR OS DADOS DO PROPRIO GITHUB
        $http.get("https://ap.github.com/users/JeanLLopes")
            .then(onSuccess,onError);    



        //CRIAMOS UMA VARIAVEL DO TIPO PESSOA
        var person = {
            firstName: "Jean",
            lastName: "Lopes",
            imageSource: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/121/127/3fcecf0.jpg"
        }

        $scope.message = "Hello Angular";
        //PARA DEIXARMOS A VARIAVEL VISIVEL EM NOSSO SCOPE USAMOS A 
        //VARIAVEL DE SCOPE
        $scope.person = person;
})