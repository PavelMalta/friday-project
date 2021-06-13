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
    isFetching: false,
    options: {pageCount: 5} as PacksQueryParamsType
}

export const packsReducer = (state: PacksInitialStateType = initialState, action: ActionType): PacksInitialStateType => {
    switch (action.type) {
        case "GET-PACKS":
            return {...state, packsTableData: action.packsTableData}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-OPTIONS":
            return {...state, options: {...state.options, ...action.options}}
        default:
            return state
    }
}

// Actions
export const getPacksAC = (packsTableData: PackResponseType) => ({type: "GET-PACKS", packsTableData} as const)
const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setOptionsAC = (options: PacksQueryParamsType) => ({type: "SET-OPTIONS", options} as const)


// Thunks
export const getStartPacksTC = () => (dispatch: Dispatch<ActionType>, getState: ()=> AppRootStateType) => {
    dispatch(isFetchingAC(true))

    const reduxOptions = getState().packs.options
    authAPI.getAuth()
        .then(res => {
            dispatch(setAuthUserDataAC(res.data))
            dispatch(setUserID(res.data._id))
            packsAPI.getPacks(reduxOptions)
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
export const getPacksTC = (options?: PacksQueryParamsType) => (dispatch: Dispatch<ActionType>, getState: ()=> AppRootStateType) => {
    dispatch(isFetchingAC(true))

    if (options) {
        dispatch(setOptionsAC(options))
    }
    const reduxOptions = getState().packs.options

    packsAPI.getPacks(reduxOptions)
        .then(res => {
            dispatch(getPacksAC(res.data))
        })
        .catch((e) => {

        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const addCardsPackTC = (addPackPayload: AddPackPayloadType): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.addPack(addPackPayload)
        .then(() => {
            dispatch(getPacksTC())
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}
export const deleteCardsPackTC = (idPack: string): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.deletePack(idPack)
        .then(() => {
            dispatch(getPacksTC())
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}
export const updateCardsPackTC = (updatePackPayload: updatePackPayloadType): ThunkType => (dispatch) => {
    dispatch(isFetchingAC(true))
    packsAPI.updatePack(updatePackPayload)
        .then(() => {
            dispatch(getPacksTC())
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}


// Types
export type SelectValueType = 5 | 10 | 25 | 50 | 100;


export type PacksInitialStateType = {
    packsTableData: PackResponseType
    isFetching: boolean
    options: PacksQueryParamsType
}

type ThunkType = ThunkAction<void, AppRootStateType, {}, ActionType>

type ActionType = ReturnType<typeof getPacksAC>
    | ReturnType<typeof isFetchingAC>
    | ReturnType<typeof setOptionsAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserID>