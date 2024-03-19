import { ActionTypes } from "../action-types"
import { Action } from "../actions"


export interface RepositioriesState {
    loading: boolean
    error: string | null
    data: string[]
}

const initialState:RepositioriesState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepositioriesState = initialState, action: Action):RepositioriesState=>{
    // type guard
    switch (action.type) {
        case ActionTypes.SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: null,
                data: []
            }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload
            }
        case ActionTypes.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: []
            }

        default:
            return state
    }
}

export default reducer