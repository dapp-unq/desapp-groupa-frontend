import {removeFromProviders, addToProviders, getProvider, getUser, selectMenu, getMenus, addUser} from './actionCreators';

export const mapStateToProps = state => {
    return {
        providers: state.providers,
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
        addToProviders(provider) {
            dispatch (addToProviders(provider))
        },
        getProvider() {
            dispatch (getProvider())
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