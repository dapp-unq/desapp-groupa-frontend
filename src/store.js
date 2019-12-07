import { createStore } from 'redux';

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
            if (action.type ===  "GET_PROVIDERS"){
                return {
                    ...state,
                    providers: action.provider
                }
            }
        }
    }
    return state;
}

export default createStore(reducer, {providers: []});