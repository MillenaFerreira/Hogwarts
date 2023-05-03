'use strict'

import { getSelectHouse } from "../js/api.js"

const name_house = localStorage.getItem('name_house')
const houses = await getSelectHouse(name_house)


const body = document.getElementById('body')
if (name_house == 'Gryffindor') {
    body.style.backgroundImage = 'url(../img/house_gryffindor.jpg)'
}else if (name_house == 'Hufflepuff') {
    body.style.backgroundImage = 'url(../img/house_hufflepuff.jpg)'
} else if (name_house == 'Ravenclaw') {
    body.style.backgroundImage = 'url(../img/house_ravenclaw.jpg)'
} else if (name_house == 'Slytherin') {
    body.style.backgroundImage = 'url(../img/house_slytherin.jpg)'
}

const createCard = (house) => {
    const card = document.createElement('div')
    card.classList.add('card-character')
    if (house.image == '') {
        card.style.backgroundImage = 'url(../img/noImage.svg)'
    } else {
        card.style.backgroundImage = `url(${house.image})`
    }
    card.addEventListener('click', () => {
        localStorage.setItem('id', house.id)
    })

    const text_card = document.createElement('p')
    text_card.classList.add('card-text')
    if (house.image == '') {
        text_card.textContent = house.name
        text_card.style.color = 'black'
    } else {
        text_card.textContent = house.name
    }

    card.append(text_card)
    return card

}

const carregarCard = () => {
    const cards = document.getElementById('cards')
    const cardsJSON = houses.map(createCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCard()