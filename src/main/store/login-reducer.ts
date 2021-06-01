import {Dispatch} from "redux";
import {authAPI} from "../ui/pages/auth/loginPage/api-login";

type InitialStateType = typeof initialState

const initialState = {
    user: {},
    isFetching: false,
    error: null as null | string,
    isAuth: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case "IS-FETCHING":
            return {...state,
                isFetching: action.isFetching}
        case "SET-ERROR":
            return {...state,
                error: action.error}
        default:
            return state
    }
}

export const setAuthUserDataAC = (payload: InitialStateType) => ({type: 'SET_USER_DATA', payload}) as const
export const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setErrorAC = (error: string) => ({type: "SET-ERROR", error} as const)


export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                console.log(response.data)
                dispatch(setAuthUserDataAC(response.data))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        console.log(error)
        dispatch(setErrorAC(error))
    })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}


export type ActionsType =
    |  ReturnType<typeof setAuthUserDataAC>
    |  ReturnType<typeof setErrorAC>
    |  ReturnType<typeof isFetchingAC>



