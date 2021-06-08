import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})

export type cardPacksType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grate: number
    shots: number
    deckCover: string
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: string
}

export type PackResponseType = {
    cardPacks: Array<cardPacksType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number

}

export type PacksQueryParamsType = {
    packName?: string
    pageCount?: number
    min?: number
    max?: number
    page?: number
}

export type AddPackPayloadType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}




export const packsAPI = {
    getPacks(packQueryParams: PacksQueryParamsType) {
        return instance.get('cards/pack', {params: packQueryParams})
    },
    addPack(addPackPayload: AddPackPayloadType) {
        return instance.post('cards/pack', {cardsPack: addPackPayload})
    },
    deletePack(idPack: string) {
        return instance.delete(`cards/pack?id=${idPack}`)
    }
}