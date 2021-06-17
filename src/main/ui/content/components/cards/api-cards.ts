import {AxiosResponse} from "axios";
import { instance } from "../login/api-login";

export const cardsAPI = {
    getCards(cardQueryParams: cardQueryParamsType) {
        return instance.get<CardsResponseType, AxiosResponse<CardsResponseType>>('cards/card', {params: cardQueryParams})
    },
    addCard(newCardPayload: NewCardPayloadType) {
        return instance.post('cards/card', {card: newCardPayload})
    },
    deleteCard(cardID: string) {
        return instance.delete(`cards/card/?id=${cardID}`)
    },
    updateCard(updateCardPayload: UpdateCardPayloadType) {
        return instance.put('cards/card', {card: updateCardPayload})
    },
    rate(grade: number, cardID: string){
        return instance.put('cards/grade', {grade: grade, card_id: cardID} )
    },
    updateQuestion(question: string, answer: string, cardID: string){
        return instance.put('cards/grade', {cardQuestion: question, cardAnswer: answer, card_id: cardID} )
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
