import {removeFromProviders, addToProviders, getProvider, getUser, setLanguage, selectMenu} from './actionCreators';

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
        getuser() {
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