//Definição de variáveis de construção do HTML dinâmico
var main = document.querySelector('main')
var div = document.createElement('div')
div.id = 'resposta'
var select = document.createElement('select')
select.id = 'tabuada'
var paragrafo = document.createElement('p')

function tabuada(){
    var numero = document.querySelector('input#dataIn')
    numero = numero.value

    main.appendChild(div)

    if (numero.length == 0){
        div.appendChild(paragrafo)
        paragrafo.innerHTML = `[ERRO] Insira um número para exibir a tabuada...`
        div.removeChild(select)
    } else{
        div.appendChild(paragrafo)
        paragrafo.innerHTML = `Tabuada de ${numero}:`

        select.innerHTML = ''
        div.appendChild(select)
        select.size = '11'

        for (var i = 0; i <= 10; i++){
            var option = document.createElement('option')
            select.appendChild(option)
            option.value = `${i}`
            option.innerHTML = `${numero} x ${i} = ${numero*i}`
        }
    }
     
}
