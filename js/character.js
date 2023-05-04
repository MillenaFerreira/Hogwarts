'use strict'

import { getSelectHouse, getSelectCharacter } from "../js/api.js"

const name_house = localStorage.getItem('name_house')
const houses = await getSelectHouse(name_house)

const personagem = localStorage.getItem('id')
//console.log(personagem);
const character = await getSelectCharacter(personagem)
console.log(character[0].name);



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

// const title = document.getElementById('title')
// title. = character[0].name


const createCard = (idClicado) => {

    const card = document.createElement('div')
    card.classList.add('card')
    card.style.backgroundImage = `url(${idClicado.image})`

    return card
}

const carregarCard = () => {
    const cards = document.getElementById('card')
    const cardsJSON = character.map(createCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCard()