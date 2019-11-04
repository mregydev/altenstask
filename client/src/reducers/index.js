import { createStore, applyMiddleware } from 'redux'
import { ERROR_FETCHING, CHANGE_LANGUAGE, UPDATE_CARS } from '../actions/'


export default (state = {
    lang: 'En', cars: [],isLoading:true,errorFetch:false
}, action) => {

    if (action.type == CHANGE_LANGUAGE) {
        return { ...state, lang: action.data.lang }
    }

    if (action.type == UPDATE_CARS) {
        return { ...state, cars: action.data,isLoading:false,errorFetch:false }
    }

    if (action.type == ERROR_FETCHING) {
        return { ...state,errorFetch:true,isLoading:false,cars:[] }
    }

}