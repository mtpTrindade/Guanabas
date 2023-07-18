/* 
Selecionando Elementos via DOM:

    Selecionando pela TAG:
    window.document.getElementsByTagName('TAG')

    Selecionando por ID:
    window.document.getElementById('ID')

    Selecionando por NAME:
    window.document.getElementsByName('NAME')

    Selecionando por CLASS:
    window.document.getElementsByClassName('CLASS')

    Selecionando por SELETOR (Query Selector):
    window.document.querySelector('Sintaxe do CSS')
    ou
    window.document.querySelectorAll('Sintaxe do CSS')

*/

var poema = window.document.getElementById('poema')
var clicked = false

poema.addEventListener('click', clique)
poema.addEventListener('mouseenter', hoverIn)
poema.addEventListener('mouseout', hoverOut)

function clique(){
    var verso = window.document.getElementById('quintoVerso')
    
    if (clicked == false){
        verso.style.color = 'white'
        verso.style.textShadow = '1px 1px 2px black';

        clicked = true

    }else{
        verso.style.color = 'transparent'
        verso.style.textShadow = 'none';

        clicked = false
    }   
}

function hoverIn(){
    poema.style.backgroundColor = 'rgb(0, 200, 180)'
    poema.style.boxShadow = '2px 2px 4px black'
    poema.style.transition = '0.3s'
}

function hoverOut(){
    poema.style.backgroundColor = 'rgb(30, 220, 180)'
    poema.style.boxShadow = 'none'
    poema.style.transition = '0.3s'
}

// 
