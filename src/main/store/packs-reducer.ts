import {
    AddPackPayloadType,
    PackResponseType,
    packsAPI,
    PacksQueryParamsType, updatePackPayloadType
} from "../ui/content/components/packs/api-packs";
import {Dispatch} from "redux";
import {authAPI} from "../ui/content/components/login/api-login";
import {setAuthUserDataAC, setUserID} from "./login-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";


const initialState = {
    packsTableData: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 0
    },
    isFetching: false
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-PACKS":
            return {...state, packsTableData: action.packsTableData}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

// Actions
export const getPacksAC = (packsTableData: PackResponseType) => ({type: "GET-PACKS", packsTableData} as const)
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)


// Thunks
export const getStartPacksTC = (packQueryParams: PacksQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    authAPI.getAuth()
        .then(res => {
            dispatch(setAuthUserDataAC(res.data))
            dispatch(setUserID(res.data._id))
            packsAPI.getPacks(packQueryParams)
                .then(res => {
                    dispatch(getPacksAC(res.data))
                })
                .catch((e) => {
                })
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
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

export const addCardsPackTC = (addPackPayload: AddPackPayloadType, packQueryParams: PacksQueryParamsType): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.addPack(addPackPayload)
        .then(() => {
            dispatch(getPacksTC(packQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}
export const deleteCardsPackTC = (idPack: string, packQueryParams: PacksQueryParamsType): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.deletePack(idPack)
        .then(() => {
            dispatch(getPacksTC(packQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}
export const updateCardsPackTC = (updatePackPayload: updatePackPayloadType, packQueryParams: PacksQueryParamsType): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.updatePack(updatePackPayload)
        .then(() => {
            dispatch(getPacksTC(packQueryParams))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}


// Types
type InitialStateType = {
    packsTableData: PackResponseType
    isFetching: boolean
}

type ThunkType = ThunkAction<void, AppRootStateType, {}, ActionType>

type ActionType = ReturnType<typeof getPacksAC>
    | ReturnType<typeof isFetchingAC>
    | ReturnType<typeof isFetchingAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserID>