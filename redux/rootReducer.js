
import initialState from './initsialState'
import produce from 'immer'

import {combineReducers} from 'redux'
export const rootReducer1 = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export function counterReducer(state = initialState, action){
    switch (action.type){
        case 'counter/increment':
            // return produce(state,(draft) => {
            //     ++draft.counter.value
            // })
            return{
                ...state,
                counter:{
                    ...state.counter,
                    value: ++state.counter.value
                }
            }
        case 'counter/decrement':
            return{
                ...state,
                counter:{
                    ...state.counter,
                    value: --state.counter.value
                }
            }
        default:
            return state
    }
}
export function todosReducer(state = initialState, action){
    switch (action.type){
        case 'todos/todosLoaded':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    ids: {
                        //[action.payload.todos]
                        ...state.todos.ids,
                        [action.payload.id] : action.payload
                    },
                    loading: false
                }
            }
        case "todos/todosLoading":
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true
                }
            }
        case "products/productsLoaded":
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            }
        case "cartProducts/cartProductsLoaded":
            return {
                ...state,
                cartProducts: [
                    ...action.payload
                ]
            }
        default:
            return state
    }
}

export default function rootReducer(state= initialState, action){
    // console.log(state)
    switch (action.type){
        case 'counter/increment':
            // return produce(state,(draft) => {
            //     ++draft.counter.value
            // })
            return{
                ...state,
                counter:{
                    ...state.counter,
                    value: ++state.counter.value
                }
            }
        case 'counter/decrement':
            return{
                ...state,
                counter:{
                    ...state.counter,
                    value: --state.counter.value
                }
            }
        case 'todos/todosLoaded':
            return {
                ...state,
                todos: {
                    ...state.todos,
                    ids: {
                        //[action.payload.todos]
                        ...state.todos.ids,
                        [action.payload.id] : action.payload
                    },
                    loading: false
                }
            }
        case "todos/todosLoading":
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true
                }
            }
        case "products/productsLoaded":
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            }
        case "cartProducts/cartProductsLoaded":
            return {
                ...state,
                cartProducts: [
                    ...action.payload
                ]
            }
        default:
            return state
    }
}

