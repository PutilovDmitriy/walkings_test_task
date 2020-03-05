//Типы экшенов

export const ADD_WALKING = 'ADD_WALKING'

//Генераторы экшенов

export function addWalking(walking) {
    return {type: ADD_WALKING, walking}
}

