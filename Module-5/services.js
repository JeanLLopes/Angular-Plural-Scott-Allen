//AQUI NO SVAMOS CRIAR E REGISTRAR TODOS OS SERVIÇOS DA APLICAÇÕA
(function(){
    var servicesGithub = function($http){

        var getUser = function(username){
            return  $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data
                });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                })
        };


        //AQUI NOS VAMOS EXPOR QUAIS VARIAVEIS DEVEM SER VISUALIZADAS EXTERNAMENTE
        return{
            getUser: getUser,
            getRepos: getRepos
        };
    };

    //AQUI NOS INFORMAMOS O NOME A SER USADO NO MODULO DE ACESSO A ESTE <script>
    //AQUI NOS DEVEMOS APLICAR O MESMO MODULO JÁ CRIADO NA APLICAÇAÕ
    var module = angular.module("MainModule")

    //AQUI NOS DEFINIMOS QUAL SERA O NOME DA VARIAVEL RESPONSAVEL POR CHAMAR AS 
    //FUNCÇÕES EXTERNAMENTE    
    //ELE VAI SUBSTITUIR O $http DA CONTROLLER
    module.factory("servicesGithub",servicesGithub) 
}());