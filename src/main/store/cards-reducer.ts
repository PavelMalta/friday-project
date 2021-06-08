
const initialState = {

}
type InitialStateType = typeof initialState

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

type ActionType = {
    type: string
}