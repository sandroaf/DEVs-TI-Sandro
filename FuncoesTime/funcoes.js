vIntervalo = null; //Variável Controle Intervalo

function f2d(valor) {
    svalor = valor.toString();
    console.log(svalor.length);
    if (svalor.length == 1) {
        svalor = "0"+svalor
    }
    return(svalor)
}

function fStart() {
    var data = new Date();
    console.log("Data:",data);

    document.getElementById("vData").innerHTML = f2d(data.getDate())+"/"+f2d(data.getMonth()+1)+"/"+data.getFullYear();
    document.getElementById("vHora").innerHTML = f2d(data.getHours())+":"+f2d(data.getMinutes())+":"+f2d(data.getSeconds());
}

function fHora() {
    var data = new Date();
    return(f2d(data.getHours())+":"+f2d(data.getMinutes())+":"+f2d(data.getSeconds()));
}

function fMostraHora(obj) {
    if (vIntervalo != null) {
       fParaMostraHora ()
       document.getElementById("acao").value = "Iniciar";
    } else {
        vIntervalo = setInterval(() => {
            obj.innerHTML = fHora();
        },1000);
        document.getElementById("acao").value = "Parar";
    }    
}
function fParaMostraHora () {
    clearInterval(vIntervalo);
    vIntervalo = null;
}

function fJogaDado() {
    //sortear um numero de 1 até 6
    var numero = Math.floor((Math.random() * 6)+1); 
    console.log(numero);
    return (numero);
}

function ir(expressao) {
    window.location.href="https://www.google.com.br/search?q="+expressao.value;
}