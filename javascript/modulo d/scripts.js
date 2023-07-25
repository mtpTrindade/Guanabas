//Variável para validação de múltiplos cliques na mesma season
var seasonCheck = null

function Champion(){
    //Definição do valor do select e das opções de seasons
    var option = document.querySelector('select') 
    var season = option.value

    //Validação para múltiplos cliques na mesma season
    //Se o valor do select for igual ao da div já existente ele não cria outra div idêntica
    if(seasonCheck === season){
        window.alert('Por favor, informe uma Season diferente da atual...')
    } else {
        // Validação da season selecionada
        if (season >= 0 && season <=13){
            //Criação da div#container que vai conter o conteúdo dinâmico
            var main = document.querySelector('main')
            var divContainer = document.createElement('div')
            divContainer.id = 'container'
            main.appendChild(divContainer)

            //Criação da img.campeao para exibir o campeão em destaque
            var image = document.createElement('img')
            image.className = 'campeao'

            switch (season) {
                
                case '0':
                    //Adição da imagem
                    divContainer.appendChild(image)
                    image.src = 'images/bc-ryze.jpg'

                    //Adição da segunda imagem nesse caso em específico
                    var image2 = document.createElement('img')
                    image2.className = 'campeao'
                    divContainer.appendChild(image2)
                    image2.src = 'images/bc-tryndamere.jpg'
                    break
                
                case '1':
                    divContainer.appendChild(image)
                    image.src = 'images/bc-nunu.jpg'
                    break

                case '2':
                    window.alert('Season 2')
                    break

                case '3':
                    window.alert('Season 3')
                    break

                case '4':
                    window.alert('Season 4')
                    break
                
                case '5':
                    window.alert('Season 5')
                    break
                    
                case '6':
                    window.alert('Season 6')
                    break

                case '7':
                    window.alert('Season 7')
                    break

                case '8':
                    window.alert('Season 8')
                    break

                case '9':
                    window.alert('Season 9')
                    break

                case '10':
                    window.alert('Season 10')
                    break

                case '11':
                    window.alert('Season 11')
                    break

                case '12':
                    window.alert('Season')
                    break

                case '13':
                    window.alert('Season 13')
                    break

                default:
                    window.alert('[ERRO] Season inválida! Selecione uma Season válida para descobrir qual foi o Campeão em destaque dela...')
            }
        } else {
            window.alert('[ERRO] Season inválida! Selecione uma Season válida para descobrir qual foi o Campeão em destaque dela...')
        }   
    }

    if (seasonCheck !== null){
        var lastDiv = document.querySelector('div#container')
        main.removeChild(lastDiv)
    }

    seasonCheck = season
}

/*
    O que falta?
    - Fazer o conteúdo dinâmico realmente aparecer dentro da div;
        
*/