
var setaEsquerda = window.document.getElementById("seta-esq");
var bruna = window.document.getElementById("bruna");
var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var setaDireita = window.document.getElementById("seta-dir");

function RolarParaDireita(){

    setaEsquerda.style="display:flex";
    bruna.style="display:flex";
    leonardo.style="display:none";
    setaDireita.style="display:none";
}

function RolarParaEsquerda(){

    setaEsquerda.style="display:none";
    bruna.style="display:none";
    leonardo.style="display:flex";
    setaDireita.style="display:flex";
}