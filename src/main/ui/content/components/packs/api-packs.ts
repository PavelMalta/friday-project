import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})

export type cardPacksType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grate: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: string
}

export type PackResponseType = {
    cardPacks: Array<cardPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type PacksQueryParamsType = {
    packName?: string
    pageCount?: number
    min?: number
    max?: number
    page?: number
}


export const packsAPI = {
    getPacks(packQueryParams: PacksQueryParamsType) {
        return instance.get('cards/pack', {params: packQueryParams})
    }
}