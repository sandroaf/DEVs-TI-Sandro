var vetornum = [];

function fVetorIncluir(numero) {
    vetornum.push(numero); //função array.push() adiciona elementos no fim do array.
    return "Incluído com sucesso - Nro de valores: "+vetornum.length+"\nSendo:"+vetornum.toString(); 
}


/* fVetorMedia - Calcula a média de valores de um vetor numérico. atualiza a lista dos valores e a média no elemento <HTML> passado por parametro
@param String idResultado do html para mostrar resultado*/
function fVetorMedia(idResultado) {
    let media = 0;
    let SomaValores = 0;
    const vidResultado = document.querySelector("#"+idResultado);
    vidResultado.innerHTML = "<ol>"; 
    for (i = 0;i < vetornum.length; i++) {
        SomaValores += vetornum[i];       
        vidResultado.innerHTML += "<li>"+vetornum[i]+"</li>" 
    }
    vidResultado.innerHTML += "</ol>";
    media = SomaValores / vetornum.length;
    vidResultado.innerHTML += "<br>Média: "+media;
}