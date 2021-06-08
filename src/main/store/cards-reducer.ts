import {CardsResponseType} from "../ui/content/components/cards/cardsTable/api-cards";
import {packsAPI, PacksQueryParamsType} from "../ui/content/components/packs/api-packs";
import {Dispatch} from "redux";
import {getPacksAC} from "./packs-reducer";

const initialState = {
     cardsTableData: {
         cards: [],
         cardsTotalCount: 0,
         maxGrade: 0,
         minGrade: 0,
         page: 0,
         pageCount: 0,
         packUserId: ''
     },
    isFetching: false
}
type InitialStateType = {
    cardsTableData: CardsResponseType
    isFetching: boolean
}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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


export const getPacksTC = (packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    packsAPI.getPacks(packQueryParams)
        .then(res => {
            dispatch(getCardsAC(res.data))
        })
        .catch((e) => {

        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

type ActionType = ReturnType<typeof getCardsAC> | ReturnType<typeof isFetchingAC>