'use strict'

export const getSelectHouse = async (name_house) => {
    const url = `https://hp-api.onrender.com/api/characters/house/${name_house}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}