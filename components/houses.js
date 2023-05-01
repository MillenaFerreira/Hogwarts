'use strict'

class card_house extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })   
        this.name = 'Name of House'
        this.img = null
        this.color = 'black'
    }

    static get observedAttributes(){
        return ['name', 'img', 'color']
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
    .house_box {
        cursor: pointer;
    }
    
    .house {
        background-color: #000;
        display: grid;
        place-items: center;
        width: 200px;
        height: 400px;
        border-top: 10px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    
    .name_house {
        font-family: 'Itim';
        font-size: 2rem;
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
    
    .img_house {
        width: 150px;
    }
    
    .triangle {
        display: flex;
    }
    
    .triangle_left {
        width: 0;
        height: 0;
        border: solid #000;
        border-width: 50px;
        border-bottom-color: transparent;
        border-right-color: transparent;
    
    }
    
    .triangle_right {
        width: 0;
        height: 0;
        border: solid #000;
        border-width: 50px;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    
    `
    return css
}

    component(){
        // Container Principal - container-header
        const house_box = document.createElement('div')
        house_box.classList.add('house_box')

        //dentro do house_box terá:
        const house = document.createElement('div')
        house.classList.add('house')
        house.style.background = this.color
        
        const triangle = document.createElement('div')
        triangle.classList.add('triangle')

        //dentro do house terá:
        const name_house = document.createElement('div')
        name_house.classList.add('name_house')
        name_house.textContent = this.name

        const img_house= document.createElement('img')
        img_house.classList.add('img_house')
        img_house.src = this.img

        //dentro do triangle terá:
        const triangle_left = document.createElement('div')
        triangle_left.classList.add('triangle_left')
        triangle_left.style.borderLeftColor= this.color
        triangle_left.style.borderTopColor= this.color

        const triangle_right = document.createElement('div')
        triangle_right.classList.add('triangle_right')
        triangle_right.style.borderRightColor= this.color
        triangle_right.style.borderTopColor= this.color


        house_box.append(house, triangle)
        house.append(name_house, img_house)
        triangle.append(triangle_left, triangle_right)


        return house_box
    }

}

customElements.define('card-house', card_house)