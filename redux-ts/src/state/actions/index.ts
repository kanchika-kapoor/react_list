import { ActionTypes } from "../action-types"

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccess {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
}

interface SearchRepositoriesError {
    type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
    payload: string
}

// type union
export type Action = SearchRepositoriesAction|
SearchRepositoriesSuccess|
SearchRepositoriesError
