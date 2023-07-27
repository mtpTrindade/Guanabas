
//Definição das variáveis
var start = document.querySelector('input#start')
var end = document.querySelector('input#end')
var step = document.querySelector('input#step')
var main = document.querySelector('main')
var resposta = document.createElement('div')
resposta.id = 'resposta'
var paragrafo = document.createElement('p')

function calculo(){
    main.appendChild(resposta)
    resposta.appendChild(paragrafo)

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        paragrafo.innerHTML = `[ERRO] Dados insuficientes.\n Por favor verifique se todos os campos foram preenchidos e tente novamente...`
    }else{

        for (var i = Number(start.value); Number(start.value) >= Number(end.value); i += Number(step.value)){
            console.log(i)
            paragrafo.innerHTML += `oi `
        }
    }
}