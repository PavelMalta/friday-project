import {
    AddPackPayloadType,
    PackResponseType,
    packsAPI,
    PacksQueryParamsType, updatePackPayloadType
} from "../ui/content/components/packs/api-packs";
import {Dispatch} from "redux";


const initialState = {
    packsTableData: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 0,
        pageCount: 0
    },
    isFetching: false
}
type InitialStateType = {
    packsTableData: PackResponseType
    isFetching: boolean
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-PACKS":
            return {...state, packsTableData: action.packsTableData}
        case "SET-CURRENT-PAGE":
            return {...state, packsTableData: {...state.packsTableData, page: action.currentPage} }
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const getPacksAC = (packsTableData: PackResponseType) => {
    return {type: "GET-PACKS", packsTableData} as const
}
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)

export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const getPacksTC = (packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    packsAPI.getPacks(packQueryParams)
        .then(res => {
            dispatch(getPacksAC(res.data))
        })
        .catch((e) => {

        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const addCardsPackTC = (addPackPayload: AddPackPayloadType, packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.addPack(addPackPayload)
        .then(() => {
            // @ts-ignore
            dispatch(getPacksTC(packQueryParams))
        })
}
export const deleteCardsPackTC = (idPack: string, packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.deletePack(idPack)
        .then(() => {
            // @ts-ignore
            dispatch(getPacksTC(packQueryParams))
        })
}
export const updateCardsPackTC = (updatePackPayload: updatePackPayloadType, packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.updatePack(updatePackPayload)
        .then(() => {
            // @ts-ignore
            dispatch(getPacksTC(packQueryParams))
        })
}

type ActionType = ReturnType<typeof getPacksAC> |
                ReturnType<typeof isFetchingAC> |
                ReturnType<typeof setCurrentPageAC>