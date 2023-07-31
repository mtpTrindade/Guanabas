//Definição das variáveis
var main = document.querySelector('main')
var resposta = document.createElement('div')
resposta.id = 'resposta'
var paragrafo = document.createElement('p')


function calculo(){
    var start = document.querySelector('input#start')
    var end = document.querySelector('input#end')
    var step = document.querySelector('input#step')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        main.appendChild(resposta)
        resposta.appendChild(paragrafo)
        paragrafo.innerHTML = `[ERRO] Dados insuficientes.\n Por favor verifique se todos os campos foram preenchidos e tente novamente...`
    }else{
        main.appendChild(resposta)
        resposta.appendChild(paragrafo)
        console.log(start)

        start = Number(start.value)
        end = Number(end.value)
        step = Number(step.value)

        paragrafo.innerHTML = 'Contando: <br>'

        if (start <= end){
            for (var i = start; i <= end; i += step){
                console.log(start)
                paragrafo.innerHTML += ` ${i},`
            }    
        } else {
            for (var i = start; i >= end; i -= step){
                paragrafo.innerHTML += ` ${i},`
            }
        }

        paragrafo.innerHTML += ' Fim.'
    }
      
}