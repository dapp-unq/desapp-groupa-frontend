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

const addUser = user => {
    return (dispatch) => {
        axios.post('http://localhost:8080/rest/user', user)
        .then(response => {
            console.log(response.status) // 201 si es correcto
            dispatch({
                type: "ADD_USER",
                user
            })
        })
    }
}

const getUser = email => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8080/rest/user/'+ email) // beniteznahueloscar@gmail.com
        const responseData = res.data;
        dispatch({
            type: "GET_USER",
            user: /*[response.data]*/ responseData
        });

        // .then(response =>{
        //     console.log(response.data)
        //     dispatch({
        //         type: "GET_USER",
        //         user: /*[response.data]*/ response.data
        //     })
        // })
    }
}

const getProvider = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8080/rest/provider/liza.chambi@gmail.com')
        const responseData = res.data
        dispatch({
            type: "GET_PROVIDER",
                provider: [responseData]
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

export {removeFromProviders, addToProviders, getProvider, addUser, getUser, selectMenu};