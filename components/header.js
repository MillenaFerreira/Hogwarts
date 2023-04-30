'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })  
        this.imagem_logo = null   
        this.text_button = 'Login'
        this.placeholder = 'Pesquisa'
    }

    static get observedAttributes(){
        return ['imagem_logo', 'text_button', 'placeholder']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
    
    .container-header {
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    
    .logo {
        display: flex;
        align-items: center;
    }
    
    .search_login {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 3vh;
    }
    
    .search {
        background: #1C252E;
        border-radius: 50px;
        padding: 12.5px;
    }
    
    .search_button {
        color: #FDBF11;
        float: right;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #1C252E;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
    }
    
    
    .search:hover .search_text {
        width: 200px;
        padding: 0 7.5px;
    }
    
    .search_text {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: #f1f1f1;
        font-size: 20px;
        transition: 0.4s;
        width: 0;
    }
    
    
    .button_login {
        width: 120px;
        height: 40px;
        font-size: 1.5rem;
        background-color: #FDBF11;
        border-radius: 10px;
        border: 0;
        color: #fff;
        font-family: 'Itim';
        cursor: pointer;
    }
    
    @media (max-width: 999px) {
        .container-header{
            display: flex;
            justify-content: space-between;
        }
        .logo_img {
            width: 90%;
            height: 80%;
        }
    
        .button_login {
            width: 80px;
            font-size: 1rem;
        }
        .search_box {
            display: none;
        }
    }
    `
    return css
}

    component(){
        // Container Principal - container-header
        const container = document.createElement('div')
        container.classList.add('container-header')

        //dentro do container terá:
        const logo = document.createElement('div')
        logo.classList.add('logo')
        const search_login = document.createElement('div')
        search_login.classList.add('search_login')

        //dentro do logo terá:
        const imagem = document.createElement('img')
        imagem.classList.add('logo_img')
        imagem.src = '../img/logo.svg'

        //dentro do search_login terá:
        const search = document.createElement('div')
        search.classList.add('search')
        const login = document.createElement('div')
        login.classList.add('login')
        

        //dentro do search terá:
        const search_text = document.createElement('input')
        search_text.classList.add('search_text')
        search_text.placeholder = this.placeholder
        const search_button = document.createElement('a')
        search_button.classList.add('search_button')

        //dentro do search_button terá:
        const icon = document.createElement('img')
        icon.src = '../img/lupa.png'

        //dentro do login terá:
        const button_login = document.createElement('button')
        button_login.classList.add('button_login')
        button_login.textContent = this.text_button


        container.append(logo, search_login)
        logo.append(imagem)
        search_login.append(search, login)
        search.append(search_text, search_button)
        search_button.append(icon)
        login.append(button_login)

        return container

    }

}

customElements.define('header-hogwarts', card)
