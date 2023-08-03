
//Vetor
var vetor = []

function adicionar(){
    //Variáveis de Construção e  Funções de validação dos elementos
    var main = document.querySelector('main') 
    var section = criarSection('answer')
    var div = criarDiv('erro')
    var p = criarP('message')

    //Valor do input
    var inputNumber = document.querySelector('input#numberIn')
    inputNumber.oninput = function() {
        if (inputNumber.value.length > 3) {
            inputNumber.value = inputNumber.value.slice(0, 3);
        }
      } 
    numero = inputNumber.value

    //Cria a primeira section
    main.appendChild(section)

    if (validacaoNumero(numero)){     
        section.insertBefore(div, section.firstElementChild)
        div.appendChild(p)
        p.innerHTML = `[Erro] Campo obrigatório!<br> Por favor digite um número.`

    } else if (validacaoIntervalo(numero)){
        section.insertBefore(div, section.firstElementChild)
        div.appendChild(p)
        p.innerHTML = `[Erro] Número fora do intervalo!<br>  Por favor digite um número entre 0 e 100.`
    
    } else {
        if (validacaoRepeticao(numero, vetor)){
            section.insertBefore(div, section.firstElementChild)
            div.appendChild(p)
            p.innerHTML = `[Erro] Número já inserido na lista! Por favor digite um número não listado.`
            
        } else {
            inputValido()

            var label = criarLabel('answerLabel')
            label.innerHTML = `Números Adicionados:`
            label.for = 'vetor'
            var select = criarSelect('vetor')
            
            section.appendChild(label)
            section.appendChild(select)
            vetor.push(numero)
    
            var selectSize = vetor.length
            select.size = `${selectSize}`
    
            var option = document.createElement('option')
            select.appendChild(option)
            option.innerHTML = `${numero}`

            var button = criarButton('button')
            button.type = 'button'

            inputNumber.value = ''
        }  
    }

    inputNumber.focus() 
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

function inputValido(){
    var div = document.querySelector('div#erro') 
    if (div != null) {
        var main = div.parentNode
        main.removeChild(div)
    }        
}

//Funções de criação de elementos

function criarSection(id){
    var section = document.querySelector('section#' + id) 
    if (section == null) { 
        section = document.createElement('section') 
        section.id = id 
    }
    return section 
}

function criarDiv(id){
    var div = document.querySelector('div#' + id) 
    if (div == null) { 
        div = document.createElement('div') 
        div.id = id 
    }
    return div 
}

function criarP(id){
    var p = document.querySelector('p#' + id) 
    if (p == null) { 
        p = document.createElement('p') 
        p.id = id 
    }
    return p 
}

function criarSelect(id){
    var select = document.querySelector('select#' + id) 
    if (select == null) { 
        select = document.createElement('select') 
        select.id = id 
    }
    return select 
}

function criarLabel(id){
    var label = document.querySelector('label#' + id) 
    if (label == null) { 
        label = document.createElement('label') 
        label.id = id
    }
    return label 
}

function criarButton(id){
    var input = document.querySelector('input#' + id) 
    if (input == null) { 
        input = document.createElement('input') 
        input.id = id
    }
    return input 
}



