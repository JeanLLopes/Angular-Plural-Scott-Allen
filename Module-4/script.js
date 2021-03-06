(function(){
    var appAngular = angular.module("MainModule",[])

    var MainController = function(scope,servicesGithub,interval,log,anchorScroll,location){

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

            //AQUI NOS VAMOS APLICAR O SCROLLS DE ELEMENTOS E TAMBEM A BUSCA POR ELEMENTOS
            //EM NOSSO DOM
            //PRIMEIRO VAMOSLOCALIZAR O ELEMENTO NO DOM
            //BUSCAMOS O ELEMENTO PELO ID
            location.hash("userDetails")

            //AGORA EFETUAMOS UM SCROLL ATE O ELEMENTO
            anchorScroll();
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
            servicesGithub.getUser(username).then(onSuccess, onError);

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
    //anchorScroll: AJUDA A EFETUAR SCROLLS COM A PAGINA PARA LEVAR O USUARIO A ALGUM LOCAL
    //QUE DESEJAMOS
    //location: AJUDA A LOCALIZAR ELEMENTOS HTML NO SEU DOM

    //QUANDO COMEÇAMOS A USAR O SERVICE.JS NOS PARAMOS DE USAR O $http NA CONTROLLER 
    appAngular.controller("MainController",["$scope","servicesGithub","$interval","$log","$anchorScroll","$location", MainController])
}());