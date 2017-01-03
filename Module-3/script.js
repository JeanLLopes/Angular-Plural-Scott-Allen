(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,http){
        scope.username = "Angular"
    }

    appAngular.controller("MainController",["$scope","$http", MainController])
}());