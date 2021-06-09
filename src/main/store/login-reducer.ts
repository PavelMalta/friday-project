import {Dispatch} from "redux";
import {authAPI} from "../ui/pages/auth/loginPage/api-login";

type InitialStateType = typeof initialState

const initialState = {
    user: {},
    isFetching: false,
    emailError: null as null | string,
    passwordError: null as null | string,
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
        case "SET-EMAIL-ERROR":
            return {...state,
                emailError: action.error}
        case "SET-PASSWORD-ERROR":
            return {...state,
                passwordError: action.error}
        default:
            return state
    }
}

export const setAuthUserDataAC = (payload: InitialStateType) => ({type: 'SET_USER_DATA', payload}) as const
export const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setEmailErrorAC = (error: string | null) => ({type: "SET-EMAIL-ERROR", error} as const)
export const setPasswordErrorAC = (error: string | null) => ({type: "SET-PASSWORD-ERROR", error} as const)


export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    authAPI.login(email, password, rememberMe)
        .then(response => {
                console.log(response.data)
                dispatch(setAuthUserDataAC(response.data))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        console.log(error)
        dispatch(setEmailErrorAC(error))
    })
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}

export const isAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
                dispatch(setAuthUserDataAC(response.data))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(setEmailErrorAC(error))
    })
}



export type ActionsType =
    |  ReturnType<typeof setAuthUserDataAC>
    |  ReturnType<typeof setEmailErrorAC>
    |  ReturnType<typeof setPasswordErrorAC>
    |  ReturnType<typeof isFetchingAC>



