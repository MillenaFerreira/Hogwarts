'use strict'

import '../js/router.js'

import { getSelectCharacter } from "../js/api.js"

const personagem = localStorage.getItem('id')
console.log(personagem);
const character = await getSelectCharacter(personagem)
console.log(character);