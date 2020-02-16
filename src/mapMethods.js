import {removeFromProviders, addToProviders, getProvider, getUser, setLanguage, selectMenu, addUser, isLogged} from './actionCreators';

export const mapStateToProps = state => {
    return {
        providers: state.providers,
        user: state.user,
        language: state.language,
        selectedMenu: state.selectedMenu,
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        removeFromProviders(provider) {
            dispatch (removeFromProviders(provider))
        },
        addToProviders(provider) {
            dispatch (addToProviders(provider))
        },
        getProvider() {
            dispatch (getProvider())
        },
        addUser(user) {
            dispatch(addUser(user))
        },
        getUser() {
            dispatch(getUser())
        },
        setLanguage(language){
            dispatch(setLanguage(language))
        },
        selectMenu(menu){
            dispatch(selectMenu(menu))
        },
    }
}