import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})


export const cardsAPI = {
    getCards(cardQueryParams: cardQueryParamsType) {
        return instance.get('cards/pack', {params: cardQueryParams})
    }
}


export type cardQueryParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id?: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
}