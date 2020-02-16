import axios from 'axios';

const addToProviders = provider => {
    return {
		type: "ADD_TO_PROVIDERS",
		provider
    }
}
const removeFromProviders = provider => {
    return {
        type: "REMOVE_FROM_PROVIDERS",
        provider
    }
}

const selectMenu = menu => {
    return {
		type: "SELECT_MENU",
		selectedMenu: menu
    }
}

const setLanguage = language => {
    return {
        type: "SET_LANGUAGE",
        language
    }
}

const addUser = user => {
    return {
		type: "ADD_USER",
		user
    }
}

const getUser = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/rest/user/beniteznahueloscar@gmail.com')
        .then(response =>{
            dispatch({
                type: "GET_USER",
                user: /*[response.data]*/ response.data
            })
        })
    }
}

const getProvider = () => {
    return (dispatch) => {
        
        axios.get('http://localhost:8080/rest/provider/liza.chambi@gmail.com')
        .then(response =>{
            dispatch({
                type: "GET_PROVIDER",
                provider: [response.data]
            })
        })
        // fetch('http://viandasya-c1a.herokuapp.com/rest/provider/sarasa@gmail.com',
        //     {
        //       method: 'GET',
        //       headers: { Access: 'https://viandasya-c1a.herokuapp.com'}
        //     }
        //   ).then(res => res.json())
        //  .then(res => {
        //      dispatch({
        //          type: "GET_PROVIDER",
        //          provider: res.data
        //      })
        //  })
    }
}

export {removeFromProviders, addToProviders, getProvider, addUser, getUser, setLanguage, selectMenu};