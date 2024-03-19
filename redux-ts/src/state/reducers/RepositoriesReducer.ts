interface RepositioriesState {
    loading: boolean
    error: string | null
    data: string[]
}

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
type Action = SearchRepositoriesAction|
SearchRepositoriesSuccess|
SearchRepositoriesError

enum ActionTypes{
    'SEARCH_REPOSITORIES' = 'search_repositories',
    'SEARCH_REPOSITORIES_SUCCESS' = 'search_repositories_success',
    'SEARCH_REPOSITORIES_ERROR'= 'search_repositories_error'
}

const reducer = (state: RepositioriesState, action: Action):RepositioriesState=>{
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