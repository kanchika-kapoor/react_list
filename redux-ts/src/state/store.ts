import {createStore, applyMiddleware} from 'redux'
import {thunk, ThunkMiddleware } from 'redux-thunk'
import reducers from './reducers'
import { Action } from './actions'
import { RepositioriesState } from './reducers/RepositoriesReducer'


export const store = createStore(reducers, {}, applyMiddleware(thunk as ThunkMiddleware<RepositioriesState ,Action>))