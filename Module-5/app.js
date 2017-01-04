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
            .otherwise({redirectTo:"/main"})
    })
}())