import {removeFromProviders, addToProviders, getProvider, getUser, setLanguage} from './actionCreators';

export const mapStateToProps = state => {
    return {
        providers: state.providers,
        user: state.user,
        language: state.language
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
    }
}