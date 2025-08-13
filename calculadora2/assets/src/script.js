let ano = document.getElementById("ano")
let button = document.getElementById("calcular")
let resposta = document.querySelector("p#resposta")

const anoatual = new Date().getFullYear();
 let idade = 0 

 function calcIdade(ano){
    ano = Number(ano.value)
    if(ano < 1900 || isNaN(ano) || ano >anoatual){
        resposta.innertext = "informe um valor valido"
 }
   else {
    idade = anoatual - ano
    resposta.innertext = "voce tem ",idade ,"anos"
   }
}



 button.addEventListener("click",function(event){
    event.preventDefault()
    calcIdade(ano)
 })