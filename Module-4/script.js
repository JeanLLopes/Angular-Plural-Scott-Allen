(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,http,interval,log){

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
        

        //CRIAMOS UMA VARIAVEL QUE SERÁ RESONSAVEL POR NOS DISSER QUE O USUARIO
        //CLICOU NO BOTAO, OU SE NÃO E ASSIM APAGAR O CONTADOR DA TELA
        var countdownInterval = null
        var startCountdown = function(){
            //IREMOS USA UM INTERVALO DE 1seg PARA CADA INTERAÇAÕ COM A FUNÇÃO DE 
            //DECREMENTO
            countdownInterval = interval(decrementCountdown,1000,scope.coutdown);
        }

        scope.search = function(username){
            log.info("Searching for: " + username)
            http.get("https://api.github.com/users/" + username)
                .then(onSuccess, onError);

            if(countdownInterval){
                //CANCELAMOS A CONSULTA POR INTERVALO
                interval.cancel(countdownInterval);
                scope.coutdown = null;
            }
        }

        scope.username = "Angular"
        scope.repoSortOrder = "-stargazers_count"
        //CRIAMOS UMA VARIAVEL RESPONSAVEL PELO NUMERO TOTAL  DO CONTADOR
        scope.coutdown = 5;
        startCountdown();

    }

    //INJETOMOS DOIS  NOVOS SERVIÇOS
    //INTERVAL: USA O INTERVAL E O SETTIMEOUT DO JAVASCRIPT
    //LOG: HABILITA OS LOGS NA SUA APLICAÇÕA, USANDO O CONSOLE.LOG PARA APRESENTAR 
    //AS INFORMAÇÕES
    appAngular.controller("MainController",["$scope","$http","$interval","$log", MainController])
}());