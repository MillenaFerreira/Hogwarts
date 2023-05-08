'use strict'

import { getSelectCharacter } from "../js/api.js"


const personagem = localStorage.getItem('id')
// console.log(personagem);
const character = await getSelectCharacter(personagem)
console.log(character[0].wand.core);


const createCard = (character) => {

    const ul = document.createElement('ul')
    ul.classList.add('ul')

    const wood = document.createElement('li')
    if (character.wand.wood == '' || character.wand.wood == null) {
        wood.textContent = `Wood: unknown`
    } else {
        wood.textContent = `Wood: ${character.wand.wood}`
    }
 
    const wand = document.createElement('li')
    if (character.wand.core == '' || character.wand.core == null) {
        wand.textContent = `Core: unknown`
    } else {
        wand.textContent = `Core: ${character.wand.core}`
    }

    const length = document.createElement('li')
    if (character.wand.length == '' || character.wand.length == null) {
        length.textContent = `Length: unknown`
    } else {
        length.textContent = `Length: ${character.wand.length}`
    }

    ul.append(wood, wand, length)

    return ul
}

export const carregarCardVarinha = () => {
    const cards = document.getElementById('uls')
    const cardsJSON = character.map(createCard)
    cards.replaceChildren(...cardsJSON)
}

// console.log(carregarCard());
// carregarCardVarinha()