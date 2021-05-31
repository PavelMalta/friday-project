import {Dispatch} from "redux"
import {passwordRecoverAPI} from "../ui/content/components/passwordRecover/api-passwordRecover";

const initialState = {
    isFetching: false
}
type InitialStateType = typeof initialState

export const passwordRecoverReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const isFetchingAC = (isFetching: boolean) => {
    return {type: "IS-FETCHING", isFetching}
}

export const recoverTC = (email: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    passwordRecoverAPI.recover(email)
        .then(res => {
            console.log(res.data)
            dispatch(isFetchingAC(false))
        })
        .catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        console.log(error)
    })
}

type ActionType = ReturnType<typeof isFetchingAC>