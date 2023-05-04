'use strict'

import { carregarCardDescription } from "./description.js"
import { carregarCardVarinha } from "./varinha.js"

const routes = {
    '/description' : {
                        html : '/pages/description.html',
                        js : carregarCardDescription
    },
    '/varinha'     : {
                        html : '/pages/varinha.html',
                        js : carregarCardVarinha
    },
}

const route = async() => {
    // não permite passar para outra página
    window.event.preventDefault()

    //passar pela url sem alterar a pagina
    window.history.pushState({}, "", window.event.target.href)

    //pegando o valor do href que é passado lá no index
    const path = window.location.pathname

    //pega a posição path que são alguma das paginas
    const response = await fetch(routes[path].html)
    
    const html = await response.text()

    //
    document.getElementById('root').innerHTML = html

    routes[path].js()

    // console.log ()


}
window.route = route