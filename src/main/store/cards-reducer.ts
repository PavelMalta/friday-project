import {
    cardQueryParamsType,
    cardsAPI,
    CardsResponseType,
    NewCardPayloadType
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
    isFetching: false
}
type InitialStateType = {
    cardsTableData: CardsResponseType
    isFetching: boolean
}

export const cardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-CARDS":
            return {...state, cardsTableData: action.cardsTableData}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

const getCardsAC = (cardsTableData: CardsResponseType) => {
    return {type: "GET-CARDS", cardsTableData} as const
}
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)


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

type ActionType = ReturnType<typeof getCardsAC> | ReturnType<typeof isFetchingAC>