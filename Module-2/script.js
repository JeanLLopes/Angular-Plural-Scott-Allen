angular.module('MainModule',[])
    .controller('MainController', function($scope){

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