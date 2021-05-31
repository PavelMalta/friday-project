import {Dispatch} from "redux";
import {regAPI} from "../ui/pages/auth/register/api/api-registr";

const initialState = {
    newUser: {}
}

type newUserType = {
    email: string
    password: string
}

type InitialStateType = typeof initialState

export const registrationReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_NEW_USER": {
            return {
                ...state,
                newUser: action.payload
            }
        }
        default:
            return state
    }
}

export const setNewUserAC = (payload: InitialStateType) => ({type: 'SET_NEW_USER', payload}) as const

export const setNewUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    debugger
    regAPI.registration(email, password)
        .then(response => {
            console.log(response.data)
            dispatch(setNewUserAC(response.data))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            console.log(error)
        })
}

export type SetNewUserType = ReturnType<typeof setNewUserAC>;

type ActionType = SetNewUserType;