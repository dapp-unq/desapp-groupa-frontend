import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

    switch (action.type)
    {
        case "ADD_TO_PROVIDERS":
            return {
                ...state,
                providers: state.providers.concat(action.provider)
            }

        case "ADD_USER":
            return {
                ...state,
                user: action.user
            }

        case "REMOVE_FROM_PROVIDERS":
            return {
                ...state,
                providers: state.providers.filter(provider => provider.name !== action.provider.name)
            }

        case "GET_PROVIDER":
            return {
                ...state,
                providers: action.provider
            }

        case "SELECT_MENU":
        return {
            ...state,
            selectedMenu: action.selectedMenu
        }

        default: 
            return state
    }

}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action);
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer, {providers: [], user:'', selectedMenu:undefined }, applyMiddleware(logger, thunk));