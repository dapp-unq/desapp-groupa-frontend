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
        type:"SELECT_MENU",
        selectedMenu: menu
    }
}

const addUser = user => {
    console.log("JSON enviado:")
    console.log(user)
    return async (dispatch) => {
        const res = await axios.post('https://viandasya-c1a.herokuapp.com/rest/user', user)
        const responseData = res.data;
        // const responseStatus = res.status;// 201 si es correcto
        dispatch({
            type: "ADD_USER",
            user
        })
    }
}

const getMenus = () => {
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/menu/rank?minRank=0&maxRank=5')
        const responseData = res.data;
        dispatch({
            type: "GET_MENUS",
            menus: responseData
        });
    }
}

const getUser = email => {
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/user/'+ email) // beniteznahueloscar@gmail.com
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

const getProvider = email => {
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/provider/'+email)
        const responseData = res.data
        dispatch({
            type: "GET_PROVIDER",
            provider: responseData
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

export {removeFromProviders, addToProviders, getProvider, addUser, getUser, selectMenu, getMenus};