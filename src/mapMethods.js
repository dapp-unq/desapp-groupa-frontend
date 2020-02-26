import {getCities, removeFromProviders, loginProvider, setHoursProvider, addToProviders, addProvider, getProvider, getUser, selectMenu, getMenus, addUser} from './actionCreators';

export const mapStateToProps = state => {
    return {
        selectedProvider: state.selectedProvider,
        user: state.user,
        menus: state.menus,
        selectedMenu: state.selectedMenu,
        cities: state.cities,
        hoursProvider: state.hoursProvider,
        provider: state.provider,
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        getCities(){
            dispatch (getCities())
        },
        removeFromProviders(provider) {
            dispatch (removeFromProviders(provider))
        },
        addToProviders(selectedProvider) {
            dispatch (addToProviders(selectedProvider))
        },
        getProvider(email) {
            dispatch (getProvider(email))
        },
        addUser(user) {
            dispatch(addUser(user))
        },
        addProvider(provider) {
            dispatch(addProvider(provider))
        },
        setHoursProvider(hours){
            dispatch(setHoursProvider(hours))
        },
        getUser(email) {
            dispatch(getUser(email))
        },
        loginProvider(email) {
            dispatch(loginProvider(email))
        },
        getMenus() {
            dispatch(getMenus())
        },
        selectMenu(menu){
            dispatch(selectMenu(menu))
        },
    }
}