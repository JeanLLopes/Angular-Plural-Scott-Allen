(function(){
    var module = angular.module("MainModule");

    var RepoController = function(scope,routeParams,servicesGithub){

        //CRIAMOS AS VARIAVEIS PARA CAPTURAR AS VARIVAIS PASSADAS PELO PARAMETRO
        var username = routeParams.username;
        var reponame = routeParams.reponame;


        var onRepo = function(data){
            scope.repo = data;
        }

        var OnError = function() {
            scope.error = 'Error durang consult...'
        }

        servicesGithub.getRepoDetails(username,reponame)
            .then(onRepo,OnError);


    };

    module.controller("RepoController",["$scope","$routeParams","servicesGithub"], RepoController);
}());