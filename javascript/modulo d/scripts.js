function Champion(){
    var option = document.querySelector("option")
    var season = option.value

    switch (season) {
        case '0':
            window.alert('Beta')
            break
        
        case '1':
            window.alert('Season 1')
            break

        default:
            window.alert('Selecione uma Season para descobrir qual foi o Campeão em destaque dela...')
    }
}