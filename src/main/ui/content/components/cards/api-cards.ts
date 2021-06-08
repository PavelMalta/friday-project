import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})


export const cardsAPI = {
    getCards(cardQueryParams: cardQueryParamsType) {
        return instance.get('cards/card', {params: cardQueryParams})
    }
}


export type cardQueryParamsType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
}

export type CardsResponseType = {
    cards: Array<CardsType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
}

export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

