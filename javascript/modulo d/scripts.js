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

            //Criação das img.campeao/time para exibir o campeão em destaque e o time vencedor
            var imageChampion = document.createElement('img')
            imageChampion.className = 'campeao'
            var imageTeam = document.createElement('img')
            imageTeam.className = 'time'

            //Criação do texto descritivo de cada season
            var paragrafo = document.createElement('p')
            paragrafo.className = 'texto'
            var paragrafo2 = document.createElement('p')
            paragrafo2.className = 'texto'
            
            switch (season) {
                
                case '0':
                    //Adição do texto inicial
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Aaah, o Beta...\n
                    Apesar da nossa querida RITO GOMES ter sido fundada em 2006, foi apenas em meados de 2009 que nasceu o filho pródigo da empresa, o League of Legends, que nós conhecemos carinhosamente como Liga das Lendas...\n
                    Dito isso, e considerando que o Beta em si não tinha ainda um cenário competitivo, os campeões em destaque daquela temporada, escolhidos humildemente por minha pessoa, foram basicamente os representantes diretos dos fundadores:\n
                    Sendo Brandon Beck como Ryze e o Marc Merill como Tryndamere!`
                    
                    //Criação de uma div para colocar as imagens nese caso em específico
                    //porque são duas 
                    var div = document.createElement('div')
                    div.className = 'beta'
                    divContainer.appendChild(div)

                    //Adição da imagem de campeão
                    div.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-ryze.jpg'

                    //Adição de um hover via JS
                    imageChampion.addEventListener("mouseenter", () => {
                        imageChampion.src = 'images/Brandon.jpg'
                    })
                    imageChampion.addEventListener("mouseout", () => {
                        imageChampion.src = 'images/bc-ryze.jpg'
                    })

                    //Adição da segunda imagem de campeão nesse caso em específico
                    var imageChampion2 = document.createElement('img')
                    imageChampion2.className = 'campeao'
                    div.appendChild(imageChampion2)
                    imageChampion2.src = 'images/bc-tryndamere.jpg'

                    //Adição de um hover via JS
                    imageChampion2.addEventListener("mouseenter", () => {
                        imageChampion2.src = 'images/Marc.jpg'
                    })
                    imageChampion2.addEventListener("mouseout", () => {
                        imageChampion2.src = 'images/bc-Tryndamere.jpg'
                    })
                    
                    break
                
                case '1':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Ok, Season 1!\n
                    Em 2011 tivemos o nosso primeiro "Wolrds", entre muitas aspas porque era o primeiro campeonato internacional e oficial da Rito, mas tava anos-luz longe do que a gente conhece como o Mundial de hoje...\n
                    Na época tivemos como a grande e primeiríssima campeã, a FNATIC, que eventualamente viria a se tornar uma equipe tradicional do cenário mundial.`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/fnatic.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `E apesar do Nunu ter uma winrate maior naquele campeonato, eu diria que o campeão em destaque desse ano sem sombra de dúvida foi o Kassadin, graças ao super backdoor lendário do xPeke utilizando 110% da mecânica do campeão...`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-kassadin.jpg'

                    imageChampion.addEventListener("mouseenter", () => {
                        imageChampion.src = 'images/xPeke.jpg'
                    })
                    imageChampion.addEventListener("mouseout", () => {
                        imageChampion.src = 'images/bc-kassadin.jpg'
                    })
                    break

                case '2':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Season 2...\n
                    Aqui foi início de tudo, onde o Wolrds realmente virou o Wolrds! Tinham mais equipes disputando, um palco enorme e transmissão simultânea na internet, tinha tudo!\n
                    E num evento onde ninguém esperava muito e simplesmente entregou tudo, nada mais justo que o time campeão fazer o mesmo, né?\n
                    Com isso tivemos a nossa segunda campeão, a TAIPEI ASSASSINS, que eram os underdogs do campeonato e mesmo assim provaram seu valor!`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/taipei-assassins.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `E o campeão destaque do campeonato foi o nosso simpático Nunu e seu amigo Willump, numa estratégia meio tank, jungle, suporte, que dava dano...\n 
                    O boneco era estranhamente insano!`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-nunu.jpg'
                    break

                case '3':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Season 3, o início de uma lenda...\n
                    Cara, o Wolrds da season 3 marcou a estreia de um moleque magro e esquisito com uma cara de antissocial que simplesmente era MUITO melhor que todo mundo!\n
                    Obviamente qeu eu estou falando do nosso véio, o Faker, que na época não era véio, obviamente...\n
                    Claro que o time da SKT, que aliás foi a campeã daquele ano, era um time muito bom já, mas o faker tava simplesmente cagando na cara de todo mundo, ele era muito superior...\n
                    E com isso a SKT levou o título naquele ano.`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/skt.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `Bom, apesar de não ter aparecido tanto naquele Mundial em específico, acho que nada mais justo do que o campeão destaque daquele ano ser o Zed.\n
                    Porque foi com ele que o Faker fez aquela jogada completamente insana que até hoje ninguém entendeu direito como aquilo foi possível.\n
                    Simplesmente look the plays, look the moves, faker! What! Was! That!`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-zed.jpg'

                    imageChampion.addEventListener("mouseenter", () => {
                        imageChampion.src = 'images/Faker.jpg'
                    })
                    imageChampion.addEventListener("mouseout", () => {
                        imageChampion.src = 'images/bc-zed.jpg'
                    })
                    break

                case '4':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Season 4!\n
                    A season em que o bagulho ficou louco e a final do Wolrds foi num puta estádio de futebol lotado de nerd, foi lindo!\n
                    Teve até Imagine Dragons!\n
                    E pra ficar mais louco ainda a SKT nem pro mundial foi e quem levou esse ano foi uma das Samsungs (na época era normal ter times gêmeos). 
                    A Samsung White!`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/ssw.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `Assim, o campeão em destaque daquele ano mais representa o player do que o campeão em si.\n
                    Mas nesse caso foi o Tresh do MadLife, ele foi simplesmente o primeiro suporte da história a CARREGAR o time pro título!\n
                    O cara era simplesmente muito a frente do tempo dele, jogando o macro do jogo numa época que nem existia esse conceito.`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-thresh.jpg'

                    imageChampion.addEventListener("mouseenter", () => {
                        imageChampion.src = 'images/MadLife.jpg'
                    })
                    imageChampion.addEventListener("mouseout", () => {
                        imageChampion.src = 'images/bc-thresh.jpg'
                    })
                    break
                
                case '5':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Season 5, o início da dinastia SKT.\n
                    Aí você se pergunta "Início? Mas a SKT não já ganhou uma?", sim ganhou, e no outro ano nem foi, mas a partir daqui a SKT virou um rolo compressor internacional e simplesmente se solidificou como uma equipe de alto escalão.\n
                    A prova disso, ela obviamente ganhou esse ano o resto do campeonato deu nem pro cheiro.`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/skt2.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `Mas ok, vamos agora pra o campeão destaque daquele ano, e no alto da minha total imparcialidade eu vou escolher o Draven.\n
                    Por que? Porque brTT > Doublelift, simples assim... 🤙`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-draven.jpg'

                    imageChampion.addEventListener("mouseenter", () => {
                        imageChampion.src = 'images/brTT.jpg'
                    })
                    imageChampion.addEventListener("mouseout", () => {
                        imageChampion.src = 'images/bc-draven.jpg'
                    })
                    break
                    
                case '6':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = `Vamos lá, Season 6...\n
                    A SKT ganhou, de novo, nenhuma novidade até aqui né...\n
                    Mas é isso aí, a ROX Tigers até tentou, mas de resto, a SKT sobrou no campeonato...`

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/skt3.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = `Apesar do SKT ter ganho esse ano e véio tava amassando, o destaque desse ano pra mim foi a Miss Fortune SUPORTE, tirada do cu, pelo super criativo Gorilla, da Rox Tigers.\n
                    Foi um dos counter picks mais exóticos e efetivos que eu já vi, em um nível onde não dava pra simplesmente testar algo, era tudo ou nada!\n
                    E nesse caso foi tudo porque a MF deu trabalho pra caralho, precisou ser banida e agora é super normal ver MF suporte...`

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/bc-mf.jpg'
                    break

                case '7':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '8':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '9':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '10':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '11':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '12':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                case '13':
                    divContainer.appendChild(paragrafo)
                    paragrafo.innerText = ``

                    divContainer.appendChild(imageTeam)
                    imageTeam.src = 'images/.jpg'

                    divContainer.appendChild(paragrafo2)
                    paragrafo2.innerText = ``

                    divContainer.appendChild(imageChampion)
                    imageChampion.src = 'images/.jpg'
                    break

                default:
                    window.alert('[ERRO] Season inválida! Selecione uma Season válida para descobrir qual foi o Campeão em destaque dela...')
            }
        } else {
            window.alert('[ERRO] Season inválida! Selecione uma Season válida para descobrir qual foi o Campeão em destaque dela...')
        }   
    }

    //Validação pra checar se a div atual é diferente da anterior e 
    //consequentemente apagar a div anterior
    if (seasonCheck !== null){
        var lastDiv = document.querySelector('div#container')
        main.removeChild(lastDiv)
    }

    //Variável pra validação de mútiplos cliques em uma mesma season
    seasonCheck = season
}

/*
    O que falta?
    - Fazer o conteúdo dinâmico realmente aparecer dentro da div;
        
*/