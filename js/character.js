'use strict'

import { getSelectHouse, getSelectCharacter } from "../js/api.js"

const name_house = localStorage.getItem('name_house')
const houses = await getSelectHouse(name_house)

const personagem = localStorage.getItem('id')
console.log(personagem);
const character = await getSelectCharacter(personagem)
console.log(character);


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

const createCard = (idClicado) => {


}

const carregarCard = () => {
    const cards = document.getElementById('card')
    const cardsJSON = houses.map(createCard)

    cards.replaceChildren(...cardsJSON)
}

carregarCard()