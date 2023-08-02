//Variáveis de Construção
var section = document.createElement('section')
    section.id = 'answer'
    var div = document.createElement('div')
    div.id = 'erro'
var select = document.createElement('select')
select.id = 'vetor'
var p = document.createElement('p')

var vetor = []

function adicionar(){
    var main = document.querySelector('main')
    var numero = document.querySelector('input#numberIn')
    numero = numero.value

    if (validacaoNumero(numero)){
        main.appendChild(section)
        section.appendChild(div)
        div.appendChild(p)
        p.innerHTML = `[Erro] Campo obrigatório!<br> Por favor digite um número.`

    } else if (validacaoIntervalo(numero)){
        main.appendChild(section)
        section.appendChild(div)
        div.appendChild(p)
        p.innerHTML = `[Erro] Número fora do intervalo!<br>  Por favor digite um número entre 0 e 100.`
    
    } else {
        var div = document.createElement('div')
        div.id = 'erro'

        if (validacaoRepeticao(numero, vetor)){
            main.appendChild(section)
            section.appendChild(div)
            div.appendChild(p)
            p.innerHTML = `[Erro] Número já inserido na lista! Por favor digite um número não listado.`
            
        } else {
            div = document.querySelector('div#answer')

            if (validacaoExistencia(div)){
                section.removeChild(div)
            }
    
            main.appendChild(section)
            section.appendChild(select)
            vetor.push(numero)
    
            var selectSize = vetor.length
            select.size = `${selectSize}`
    
            var option = document.createElement('option')
            select.appendChild(option)
            option.innerHTML = `${numero}`
        }  
    }
}


//Validações

function validacaoNumero(n){
    if (Number(n.length) == 0){
        return true
    } else {
        return false
    }
}

function validacaoIntervalo(n){
    if (n < 0 || n> 100){
        return true
    } else {
        return false
    }
}

function validacaoRepeticao(n, v){
    if (v.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function validacaoExistencia(element){
    if (element !== null){
        return true
    } else {
        return false
    }
}

