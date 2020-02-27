import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

    switch (action.type)
    {
        case "ADD_TO_PROVIDERS":
            return {
                ...state,
                selectedProvider: state.selectedProvider.concat(action.selectedProvider)
            }

        case "ADD_USER":
            return {
                ...state,
                user: action.user
            }

        case "ADD_PROVIDER":
            return {
                ...state,
                provider: action.provider
            }

        case "GET_USER":
            return {
                ...state,
                user: action.user
            }

        case "REMOVE_FROM_PROVIDERS":
            return {
                ...state,
                selectedProvider: state.selectedProvider.filter(selectedProvider => selectedProvider.name !== action.selectedProvider.name)
            }

        case "GET_PROVIDER":
            return {
                ...state,
                selectedProvider: action.selectedProvider
            }

        case "GET_MENUS":
            return {
                ...state,
                menus: action.menus
            }

        case "SELECT_MENU":
        return {
            ...state,
            selectedMenu: action.selectedMenu
        }

        case "GET_CITIES":
        return {
            ...state,
            cities: action.cities
        }

        case "SET_HOURS_PROVIDER":
            return {
                ...state,
                hoursProvider: action.hoursProvider
        }

        case "LOGIN_PROVIDER":
            return {
                ...state,
                provider: action.provider
        }

        case "EDIT_PROVIDER":
            return {
                ...state,
                provider: action.provider
        }

        case "REMOVE_PROVIDER":
            return {
                ...state,
                provider: action.provider
        }

        case "PURCHASE":
            return {
                ...state,
                order: action.order
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

export default createStore(reducer, {hoursProvider: [], cities: [], order:'', selectedProvider: "", provider: "", menus:[], user:'', selectedMenu:"" }, applyMiddleware(logger, thunk));