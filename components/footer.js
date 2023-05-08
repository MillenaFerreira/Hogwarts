'use strict'

class footer extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })   
        this.text_copyright = 'Developed by'
        this.link_text = 'Millena Ferreira 💕'
        this.link = 'https://github.com/MillenaFerreira'
    }

    static get observedAttributes(){
        return ['text_copyright', 'link_text', 'link']
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
    a{
        text-decoration: none;
        color: inherit;
    }
    .copyright{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'Itim';
        gap: 0.25rem;
    }
    @media (max-width: 999px) {
        .copyright{
            font-size: 2rem;
        }
    }
    `
    return css
}

    component(){
        // Container Principal - container-header
        const copyright = document.createElement('p')
        copyright.classList.add('copyright')
        copyright.textContent = this.text_copyright

        //dentro do copyright terá:
        const link = document.createElement('a')
        link.textContent = this.link_text
        link.href = this.link

        copyright.append(link)

        return copyright
    }

}

customElements.define('footer-hogwarts', footer)