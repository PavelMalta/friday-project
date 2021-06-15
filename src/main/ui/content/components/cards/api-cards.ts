import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})


export const cardsAPI = {
    getCards(cardQueryParams: cardQueryParamsType) {
        return instance.get<CardsResponseType, AxiosResponse<CardsResponseType>>('cards/card', {params: cardQueryParams})
    },
    addCard(newCardPayload: NewCardPayloadType) {
        return instance.post('cards/card',{card: newCardPayload})
    },
    deleteCard(cardID: string) {
        return instance.delete(`cards/card/?id=${cardID}`)
    },
    updateCard(updateCardPayload: UpdateCardPayloadType) {
        return instance.put('cards/card', {card: updateCardPayload})
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

export type NewCardPayloadType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}

export type UpdateCardPayloadType = {
    _id: string
    question?: string
    answer?: string
    comments?: string
}