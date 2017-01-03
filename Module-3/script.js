(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,http){
        scope.username = "Angular"


        var onSuccess = function(response){
            scope.user = response.data;
            
            //CASO TENHA DADO SUCESSO NOS VAMOS EFETUAR OUTRA BUSCA
            //AGORA PELOS REPOSITORIOS DE UM USUARIO
            debugger;
            http.get(scope.user.repos_url)
                .then(onSuccessRepos,onError)
        }
        var  onError= function(response){
            scope.error = 'Erro durante processo..';
        }

        var onSuccessRepos = function(response){
            scope.repos = response.data;
        }

        scope.search = function(username){
            http.get("https://api.github.com/users/" + username)
                .then(onSuccess, onError);
        }
    }

    appAngular.controller("MainController",["$scope","$http", MainController])
}());