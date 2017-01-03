(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,http){
        scope.username = "Angular"


        var onSuccess = function(response){
            scope.user = response.data;
        }
        var  onError= function(response){
            scope.error = 'Erro durante processo..';
        }
        scope.search = function(username){
            http.get("https://api.github.com/users/" + username)
                .then(onSuccess, onError);
        }
    }

    appAngular.controller("MainController",["$scope","$http", MainController])
}());