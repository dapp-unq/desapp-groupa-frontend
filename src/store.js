import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

    if (action.type === "ADD_TO_PROVIDERS") {
        return {
            ...state,
            providers: state.providers.concat(action.provider)
        };
    }
    else 
    {
        if (action.type === "REMOVE_FROM_PROVIDERS"){
            return {
                ...state,
                providers: state.providers.filter(provider => provider.name !== action.provider.name)
            };
        }
        else
        {
            if (action.type ===  "GET_PROVIDER"){
                return {
                    ...state,
                    providers: action.provider
                }
            }
        }
    }
    return state;
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action);
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer, {providers: []}, applyMiddleware(logger, thunk));