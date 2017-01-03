//DENTRO DESTE METODO NOS TEMOS OS METODOS 
//PRIVADOS, ELES ESTÃO ENCAPSULADOS DENTRO
//DA FUNÇÃO
//ELES TEM VISIBILIDADE SOMENTE PRIVATE
//ENTÃO PARA VISIBILIDADE EXTERNA VAMOS
//USAR O QUE TEMOS NO return
//DEIXANDO EXPOSTO SOMENTE OS METODOS
//job1 E job2
var createWork = function(){

    var workCount = 0;

    
    
    var task1 = function(){
        workCount += 1;
        console.log('task1 '+workCount);
    }

    var task2 = function(){
        workCount +=1;
        console.log('task2 '+workCount);
    }

    return{
        job1: task1,
        job2: task2
    };
}


var worker = createWork();

worker.job1();
worker.job2();
worker.job2();
worker.job2();
