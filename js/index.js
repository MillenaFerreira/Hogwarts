'use strict'
// console.log('entrei');


import { getSelectHouse } from "../js/api.js"
// import { selectHouse } from "../js/testeAPI.js";
const name_house = localStorage.getItem('name_house')
const houses = await getSelectHouse(name_house)
console.log(houses)

// console.log(selectHouse[1].name);
// console.log(selectHouse[1].image);



const createCard = (house) => {

    const cont = 0;

    const card = document.createElement('div')
    card.classList.add('card-character')
    if (house.image == '') {
        card.style.backgroundImage = 'url(../img/body.svg)'
    } else {
        card.style.backgroundImage = `url(${house.image})`
    }

    const text_card = document.createElement('p')
    text_card.classList.add('card-text')
    text_card.textContent = house.name

    card.append(text_card)
    // console.log(card);
    return card

}

const carregarCard = () => {
    // console.log('bbbbbbb');
    const cards = document.getElementById('cards')
    const cardsJSON = houses.map(createCard)
    // console.log(cardsJSON);

    cards.replaceChildren(...cardsJSON)
}

carregarCard()