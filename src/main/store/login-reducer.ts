import {Dispatch} from "redux";
import {authAPI} from "../ui/pages/auth/loginPage/api-login";

type InitialStateType = typeof initialState

const initialState = {
    user: {},
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (payload: InitialStateType) => ({type: 'SET_USER_DATA', payload}) as const

export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                console.log(response.data)
                dispatch(setAuthUserDataAC(response.data))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        console.log(error)
    })
}
export type setAuthUserDataType = ReturnType<typeof setAuthUserDataAC>

type ActionsType =
    |  setAuthUserDataType



