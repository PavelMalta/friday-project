import {CardsResponseType} from "../ui/content/components/cards/cardsTable/api-cards";

const initialState = {
     cardsTableData: {
         cards: [],
         cardsTotalCount: 0,
         maxGrade: 0,
         minGrade: 0,
         page: 0,
         pageCount: 0,
         packUserId: ''
     },
    isFetching: false
}
type InitialStateType = {
    cardsTableData: CardsResponseType
    isFetching: boolean
}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

type ActionType = {
    type: string
}