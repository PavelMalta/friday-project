import {
    cardQueryParamsType,
    cardsAPI,
    CardsResponseType,
    NewCardPayloadType, UpdateCardPayloadType
} from "../ui/content/components/cards/api-cards";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

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
    cardsPackId: "",
    packName: ""
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-CARDS":
            return {...state, cardsTableData: action.cardsTableData}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-CARDS-PACK-ID":
            return {...state, cardsPackId: action.cardsPackId}
        case "SET-PACK-NAME":
            return {...state, packName: action.packName}
        default:
            return state
    }
}

//Actions
const getCardsAC = (cardsTableData: CardsResponseType) => ({type: "GET-CARDS", cardsTableData} as const)
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setCardsPackIdAC = (cardsPackId: string) => ({type: "SET-CARDS-PACK-ID", cardsPackId} as const)
export const setPackNameAC = (packName: string) => ({type: "SET-PACK-NAME", packName} as const)


//Thunks
export const getCardsTC = (cardQueryParams: cardQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    debugger
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

export const addCardTC = (newCardPayload: NewCardPayloadType, cardQueryParams: cardQueryParamsType):ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.addCard(newCardPayload)
        .then(res => {
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const deleteCardTC = (cardID: string, cardQueryParams: cardQueryParamsType):ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.deleteCard(cardID)
        .then(res => {
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const updateCardTC = (updateCardPayload: UpdateCardPayloadType, cardQueryParams: cardQueryParamsType):ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    cardsAPI.updateCard(updateCardPayload)
        .then(res => {
            dispatch(getCardsTC(cardQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}


//Types
export type InitialStateType = {
    cardsTableData: CardsResponseType
    isFetching: boolean
    cardsPackId: string
    packName: string
}

type ThunkType = ThunkAction<void, AppRootStateType, {}, ActionType>

type ActionType = ReturnType<typeof getCardsAC>
                | ReturnType<typeof isFetchingAC>
                | ReturnType<typeof setCardsPackIdAC>
                | ReturnType<typeof setPackNameAC>