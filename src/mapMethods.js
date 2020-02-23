import {removeFromProviders, addToProviders, getProvider, getUser, selectMenu, getMenus, addUser} from './actionCreators';

export const mapStateToProps = state => {
    return {
        selectedProvider: state.selectedProvider,
        user: state.user,
        menus: state.menus,
        selectedMenu: state.selectedMenu,
    };
}

export const mapDispatchToProps = dispatch => {
    return {
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