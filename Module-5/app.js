(function(){
    var app = angular.module("MainModule",["ngRoute"])

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })

            //AQUI NOS USAMOS UM PARAMETRO DE URL
            .when("user/:username",{
                templateUrl: "user.html",
                controller: "UserController"
            })            
            
            //AQUI NOS USAMOS UM PARAMETRO DE URL
            .when("user/:username/:reponame",{
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"})
    })
}())