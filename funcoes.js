function fMaiorIdade(anos) {
    if (anos<18) {
        return("Menor");
    } 
    else
    {
        return("Maior");
    }
}

function fGenero(sexo) {
    return((sexo == "M" || sexo == "m"?"homem":"mulher"));
}

function calcula(va, vb, op) {
    res = 0;
    ova = parseFloat(document.getElementById(va).value);
    ovb = parseFloat(document.getElementById(vb).value);
    switch (op) {
       case "+": res = ova+ovb; break;  
       case "-": res = ova-ovb; break;  
       case "*": res = ova*ovb; break;  
       case "/": res = ova/ovb; break;  
    }
    return (res);
}