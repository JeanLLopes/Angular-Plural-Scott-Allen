
//AQUI NOS CRIAMOS UMA FUNÇAÕ QUE VAI BASICAMENTE
//APRESENTAR UMA CONSOLE .LOG
var work = function(){
    console.log('working hard')
}

var doWork = function(f) {
    console.log('starting work')
    try {
        f();    
    } catch (error) {
        console.log(error)
    }
    console.log('end work')    
}

//AQUI NOS ENCAPSULAMOS O TRABALHO DA FUNCTION work
//POIS ELA VAI SER LEVADA COMO PARAMETRO
//ASSIM NOS PODEMOS CRIAR LOGS DE EXECUÇÃO PARA ESTA FUNCTION
//assim nos ABSTRAIMOS AS FUNCTIONS
doWork(work)