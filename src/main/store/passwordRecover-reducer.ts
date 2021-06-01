import {Dispatch} from "redux"
import {passwordRecoverAPI} from "../ui/content/components/passwordRecover/api-passwordRecover";

const initialState = {
    isFetching: false,
    error: null as null | string
}
type InitialStateType = typeof initialState

export const passwordRecoverReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setErrorAC = (error: string | null) => ({type: "SET-ERROR", error} as const)

export const recoverTC = (email: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    passwordRecoverAPI.recover(email)
        .then(res => {
            console.log(res.data)
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            dispatch(setErrorAC(error))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

type ActionType = ReturnType<typeof isFetchingAC> | ReturnType<typeof setErrorAC>