import axios from "axios"
import { ActionTypes } from "../action-types"
import { Action } from "../actions"
import { Dispatch } from "redux"

interface resultJson{
    package:{
        name: string
    }
}

export const SearchRepositories = (term: string) =>{
    return async (dispatch: Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES
        })

        try{
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {params:{text: term}})

            const names: string[] = data.objects.map((res:resultJson)=>{
                return res.package.name
            })

            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })


        } catch(err)
        {
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: (<Error>err).message
            })
        }
    }
}