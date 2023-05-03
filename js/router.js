'use strict'

const routes = {
    '/pages/description' : '/pages/description.html',
    '/pages/varinha'     : '/pages/varinha.html',
}

const route = async() => {
    // não permite passar para outra página
    window.event.preventDefault()

    //passar pela url sem alterar a pagina
    window.history.pushState({}, "", window.event.target.href)

    //pegando o valor do href que é passado lá no index
    const path = window.location.pathname

    //pega a posição path que são alguma das paginas
    const response = await fetch(routes[path])
    
    const html = await response.text()

    //
    document.getElementById('root').innerHTML = html


}
window.route = route