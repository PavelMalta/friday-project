import {
    cardQueryParamsType,
    cardsAPI,
    CardsResponseType,
    NewCardPayloadType, UpdateCardPayloadType
} from "../ui/content/components/cards/api-cards";
import {Dispatch} from "redux";

const initialState = {
     cardsTableData: {
         cards: [],
         cardsTotalCount: 0,
         maxGrade: 0,
         minGrade: 0,
         page: 0,
         pageCount: 0
     },
    isFetching: false,
    cardsPackId: ""
}
type InitialStateType = {
    cardsTableData: CardsResponseType
    isFetching: boolean
    cardsPackId: string
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-CARDS":
            return {...state, cardsTableData: action.cardsTableData}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-CARDS-PACK-ID":
            return {...state, cardsPackId: action.cardsPackId}
        default:
            return state
    }
}

const getCardsAC = (cardsTableData: CardsResponseType) => {
    return {type: "GET-CARDS", cardsTableData} as const
}
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setCardsPackIdAC = (cardsPackId: string) => ({type: "SET-CARDS-PACK-ID", cardsPackId} as const)


export const getCardsTC = (cardQueryParams: cardQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    cardsAPI.getCards(cardQueryParams)
        .then(res => {
            dispatch(getCardsAC(res.data))
        })
        .catch((e) => {

        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const addCardTC = (newCardPayload: NewCardPayloadType, cardQueryParams: cardQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.addCard(newCardPayload)
        .then(res => {
            // @ts-ignore
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const deleteCardTC = (cardID: string, cardQueryParams: cardQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.deleteCard(cardID)
        .then(res => {
            // @ts-ignore
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const updateCardTC = (updateCardPayload: UpdateCardPayloadType, cardQueryParams: cardQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.updateCard(updateCardPayload)
        .then(res => {
            // @ts-ignore
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

type ActionType = ReturnType<typeof getCardsAC>
                | ReturnType<typeof isFetchingAC>
                | ReturnType<typeof setCardsPackIdAC>