'use strict'

class footer extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })   
        this.imagem = '../img/body.svg'
        this.title = 'Sala de Aula'
        this.a_link = '../index.html'
    }

    static get observedAttributes(){
        return ['imagem', 'title', 'a_link']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.append(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
    .news-card {
        margin: 0.5rem;
        overflow: hidden;
        border-radius: 0.5rem;
        flex: 1;
        min-width: 300px;
        //cursor: pointer;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
    }
    
    .news-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
        z-index: 0;
    }
    
    .news-card__card-link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .news-card__image {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 3s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: relative;
        z-index: -1;
    }
    
    .news-card__text-wrapper {
        width: 100%;
        position: absolute;
        bottom: 0rem;
        color: white;
        text-align: center;
        font-size: 2rem;
    }
    
    @media (min-width: 900px) {
        .news-card {
            min-width: 80%;
        }
    
        .news-card:hover .news-card__text-wrapper {
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
        }
    
        .news-card:hover .news-card__image {
            transform: scale(1.1);
            z-index: -1;
        }
    }
    `
    return css
}

    component(){
        // Container Principal - container-header
        const new_card = document.createElement('div')
        new_card.classList.add('news-card')


        //dentro do newCard terá:
        const link = document.createElement('a')
        link.classList.add('news-card__card-link')
        // link.href = this.a_link

        const image = document.createElement('img')
        image.classList.add('news-card__image')
        image.src = this.imagem

        const text_wrapper = document.createElement('div')
        text_wrapper.classList.add('news-card__text-wrapper')

        
        //dentro do text_wrapper terá:
        const title = document.createElement('h2')
        title.classList.add('news-card__title')
        title.textContent = this.title

        new_card.append(link, image, text_wrapper)
        text_wrapper.append(title)

        console.log(new_card);

        return new_card
    }

}

customElements.define('card-sala', footer)