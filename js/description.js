'use strict'

import { getSelectCharacter } from "../js/api.js"


const personagem = localStorage.getItem('id')
// console.log(personagem);
const character = await getSelectCharacter(personagem)
console.log(character);
//  console.log(character[0].name);
//  console.log(character[0].dateOfBirth);
//  console.log(character[0].species);
//  console.log(character[0].ancestry);


const createCard = (character) => {
console.log('entrei');
    const ul = document.createElement('ul')
    ul.classList.add('ul')

    const name = document.createElement('li')
    name.textContent = `Name: ${character.name}`
 
    const data = document.createElement('li')
    data.textContent = `Birthday: ${character.dateOfBirth}`

    const especie = document.createElement('li')
    especie.textContent = `Specie: ${character.species}`

    const ancestralidade = document.createElement('li')
    ancestralidade.textContent = `Ancestry: ${character.ancestry}`

    const patrono = document.createElement('li')
    patrono.textContent = `Patrono: ${character.patronus}`

    ul.append(name, data, especie, patrono)

    return ul
}

export const carregarCardDescription = () => {
    const cards = document.getElementById('uls')
    const cardsJSON = character.map(createCard)
    cards.replaceChildren(...cardsJSON)
}

// console.log(carregarCard());
// carregarCardDescription()