import {Dispatch} from "redux";
import {authAPI} from "../ui/content/components/login/api-login";



export type LoginInitialStateType = typeof loginInitialState

export type UserDataType = {
    avatar: string,
    created: number,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    updated: number,
    _id: string,
}

const loginInitialState = {
    user: {
        avatar: '',
        name: '',
        email: '',
         },
    isFetching: false,
    emailError: null as null | string,
    passwordError: null as null | string,
    isAuth: false,
    userID: ""
}

export const loginReducer = (state: LoginInitialStateType = loginInitialState, action: ActionsType): LoginInitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                // user: action.payload,
                isAuth: true
            }
        case "IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET-EMAIL-ERROR":
            return {
                ...state,
                emailError: action.error
            }
        case "SET-PASSWORD-ERROR":
            return {
                ...state,
                passwordError: action.error
            }
        case "SET-USER-ID":
            return {
                ...state,
                userID: action.userID
            }
        case "LOGOUT":
            return {
                ...state,
                // user: {},
                isAuth: false
            }
        case  'UPDATE_PROFILE':
            return {
                ...state,
                user: {
                    name: action.payload.user.name,
                    avatar: action.payload.user.avatar,
                    email: action.payload.user.email
                }
            }
        case  'SET-USER':
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.user.name,
                    avatar: action.payload.user.avatar
                }
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (payload: LoginInitialStateType) => ({type: 'SET_USER_DATA', payload}) as const
export const isFetchingAC = (isFetching: boolean) => ({type: "IS-FETCHING", isFetching} as const)
export const setEmailErrorAC = (error: string | null) => ({type: "SET-EMAIL-ERROR", error} as const)
export const setPasswordErrorAC = (error: string | null) => ({type: "SET-PASSWORD-ERROR", error} as const)
export const setUserID = (userID: string) => ({type: "SET-USER-ID", userID} as const)
export const logoutAC = () => ({type: "LOGOUT"} as const)
export const updateUserProfileAC = (user: UserDataType) => ({type: 'UPDATE_PROFILE', payload: {user}} as const)
export const setUserFromServerAC = (user: UserDataType) => ({type: 'SET-USER', payload: {user}} as const)


export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    authAPI.login(email, password, rememberMe)
        .then(response => {
                console.log(response.data)
                dispatch(setAuthUserDataAC(response.data))
                dispatch(setUserID(response.data._id))
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

export const getProfileUserdataTC = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
            dispatch(updateUserProfileAC(response.data))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            console.log(error)
        })
}

export const isAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
                dispatch(setAuthUserDataAC(response.data))
                dispatch(setUserID(response.data._id))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(setEmailErrorAC(error))
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
                dispatch(logoutAC())
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(setEmailErrorAC(error))
    })
}

export const updateProfileDataTC = (name: string, avatar: string) => (dispatch: Dispatch) => {
        dispatch(isFetchingAC(true))
        authAPI.updateProfile(name, avatar)
            .then(response => {
                dispatch(updateUserProfileAC(response.data.updatedUser))
                // @ts-ignore
                dispatch(getProfileUserdataTC())
                 }
            ).catch( (e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            console.log(error)
        })
            .finally(() => {
                dispatch(isFetchingAC(false))
            })
    }

export type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setEmailErrorAC>
    | ReturnType<typeof setPasswordErrorAC>
    | ReturnType<typeof isFetchingAC>
    | ReturnType<typeof setUserID>
    | ReturnType<typeof logoutAC>
    | ReturnType<typeof updateUserProfileAC>
    | ReturnType<typeof setUserFromServerAC>



