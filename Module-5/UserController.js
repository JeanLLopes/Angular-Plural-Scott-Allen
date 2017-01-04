(function(){
    var appAngular = angular.module("MainModule")

    var UserController = function(scope,servicesGithub,routeParams){

        var onSuccess = function(data){
            scope.user = data;
            
            //CASO TENHA DADO SUCESSO NOS VAMOS EFETUAR OUTRA BUSCA
            //AGORA PELOS REPOSITORIOS DE UM USUARIO
            servicesGithub.getRepos(scope.user).then(onSuccessRepos,onError)
        }
        var  onError= function(data){
            scope.error = 'Erro durante processo..';
        }

        var onSuccessRepos = function(data){
            scope.repos = data;
        };

        //CRIAMOS UMA VARIAVEL RESPONSAVEL POR RECEBER O PARAMETRO DE URL
        scope.username = routeParams.username;
        scope.repoSortOrder = "-stargazers_count";

        //EFETUAMOS UM GET PARA PEGAR AS INFORMAÇÕES DA API
        servicesGithub.getUser(scope.username).then(onSuccess,onError);
    };

    //INJETOMOS DOIS  NOVOS SERVIÇOS
    //INTERVAL: USA O INTERVAL E O SETTIMEOUT DO JAVASCRIPT
    //LOG: HABILITA OS LOGS NA SUA APLICAÇÕA, USANDO O CONSOLE.LOG PARA APRESENTAR 
    //AS INFORMAÇÕES
    //anchorScroll: AJUDA A EFETUAR SCROLLS COM A PAGINA PARA LEVAR O USUARIO A ALGUM LOCAL
    //QUE DESEJAMOS
    //location: AJUDA A LOCALIZAR ELEMENTOS HTML NO SEU DOM
    //$routeParams: AQUI NOS HABILITAMOS O USO DE PARAMETROS DE URL 

    //QUANDO COMEÇAMOS A USAR O SERVICE.JS NOS PARAMOS DE USAR O $http NA CONTROLLER 
    appAngular.controller("UserController",["$scope","servicesGithub","$routeParams",UserController]);
}());