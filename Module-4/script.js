(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,http,interval){

        var onSuccess = function(response){
            scope.user = response.data;
            
            //CASO TENHA DADO SUCESSO NOS VAMOS EFETUAR OUTRA BUSCA
            //AGORA PELOS REPOSITORIOS DE UM USUARIO
            http.get(scope.user.repos_url)
                .then(onSuccessRepos,onError)
        }
        var  onError= function(response){
            scope.error = 'Erro durante processo..';
        }

        var onSuccessRepos = function(response){
            scope.repos = response.data;
        }

        //CRIAMOS UMA FUNÇÃO QUE VAIPAENAS EFETUAR O DECREMENTO DADO
        //VARIAVEL coutdown
        var decrementCountdown = function(){
            scope.coutdown -= 1;
            if(scope.coutdown < 1){
                scope.search(scope.username)
            }
        }

        var startCountdown = function(){
            //IREMOS USA UM INTERVALO DE 1seg PARA CADA INTERAÇAÕ COM A FUNÇÃO DE 
            //DECREMENTO
            interval(decrementCountdown,1000,scope.coutdown)
        }

        scope.search = function(username){
            http.get("https://api.github.com/users/" + username)
                .then(onSuccess, onError);
        }

        scope.username = "Angular"
        scope.repoSortOrder = "-stargazers_count"
        //CRIAMOS UMA VARIAVEL RESPONSAVEL PELO NUMERO TOTAL  DO CONTADOR
        scope.coutdown = 5;
        startCountdown();

    }

    appAngular.controller("MainController",["$scope","$http","$interval", MainController])
}());