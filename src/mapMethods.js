import {getCities, removeFromProviders, setHoursProvider, addToProviders, getProvider, getUser, selectMenu, getMenus, addUser} from './actionCreators';

export const mapStateToProps = state => {
    return {
        selectedProvider: state.selectedProvider,
        user: state.user,
        menus: state.menus,
        selectedMenu: state.selectedMenu,
        cities: state.cities,
        hoursProvider: state.hoursProvider,
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
        setHoursProvider(hours){
            dispatch(setHoursProvider(hours))
        },
        getUser(email) {
            dispatch(getUser(email))
        },
        getMenus() {
            dispatch(getMenus())
        },
        selectMenu(menu){
            dispatch(selectMenu(menu))
        },
    }
}