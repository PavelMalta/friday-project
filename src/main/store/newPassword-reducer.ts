
import {Dispatch} from "redux"
import {newPasswordAPI} from "../ui/content/components/newPassword/api-newPassword";


const initialState = {
    resetPassword: null as string | null,
    isFetching: false,
    error: null as null | string,
    success: false,
}
type InitialStateType = typeof initialState

export const resetPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case 'SET-NEW-PASSWORD': {
            return {...state, resetPassword: action.newPassword}
        }
        case "SET-ERROR":
            return {...state, error: action.error}
        case 'NEW_PASSWORD/SET_SUCCESS': {
            return {...state, success: action.success}
        }
        default:
            return state
    }
}

export const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setErrorAC = (error: string | null) => ({type: "SET-ERROR", error} as const)
export const resetPasswordAC = (newPassword: string) => {return {type: 'SET-NEW-PASSWORD', newPassword} as const}
export const setNewPasswordSuccessAC = (success: boolean) => ({type: 'NEW_PASSWORD/SET_SUCCESS', success}) as const

export const resetPasswordTC = (password: string, resetPasswordToken: string | undefined) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    newPasswordAPI.resetPassword(password, resetPasswordToken )
           .then(res => {
            console.log(res.data)
            dispatch(setNewPasswordSuccessAC(true))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            dispatch(setErrorAC(error))
        })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

type ActionType = ReturnType<typeof isFetchingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof resetPasswordAC>
    | ReturnType<typeof setNewPasswordSuccessAC>