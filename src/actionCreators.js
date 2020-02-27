import axios from 'axios';

const addToProviders = selectedProvider => {
    return {
		type: "ADD_TO_PROVIDERS",
		selectedProvider
    }
}
const removeFromProviders = selectedProvider => {
    return {
        type: "REMOVE_FROM_PROVIDERS",
        selectedProvider
    }
}

const setHoursProvider = hours => {
    return {
       type:"SET_HOURS_PROVIDER",
       hoursProvider: hours
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

const addProvider = provider => {
    console.log("JSON enviado:")
    console.log(provider)
    return async (dispatch) => {
        const res = await axios.post('https://viandasya-c1a.herokuapp.com/rest/provider', provider)
        const responseData = res.data;
        // const responseStatus = res.status;// 201 si es correcto
        dispatch({
            type: "ADD_PROVIDER",
            provider
        })
    }
}

const editProvider = provider => {
    console.log("JSON enviado para editar:")
    console.log(provider)
    return async (dispatch) => {
        const res = await axios.put('https://viandasya-c1a.herokuapp.com/rest/provider', provider)
        const responseData = res.data;
        // const responseStatus = res.status;// 201 si es correcto
        dispatch({
            type: "EDIT_PROVIDER",
            provider
        })
    }
}

const purchase = order => {
    console.log("JSON enviado para comprar:")
    console.log(order)
    return async (dispatch) => {
        const res = await axios.post('https://viandasya-c1a.herokuapp.com/rest/purchase', order)
        const responseStatus = res.status// 200 si es correcto
        dispatch({
            type: "PURCHASE",
            order: responseStatus // 200 si es correcto
        })
    }
}

const getMenus = () => {
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/menu/rank?minRank=0&maxRank=5');
        const responseData = res.data;
        dispatch({
            type: "GET_MENUS",
            menus: responseData
        });
    }
}

const getCities = () => {
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/provider/cities')
        const responseData = res.data;
        dispatch({
            type: "GET_CITIES",
            cities: responseData
        });
    }
}

const loginProvider = email => {
    console.log('Mail enviado:')
    console.log(email)
    return async (dispatch) => {
        const res = await axios.get('https://viandasya-c1a.herokuapp.com/rest/provider/'+email)
        const responseData = res.data
        dispatch({
            type: "LOGIN_PROVIDER",
            provider: responseData
        })
    }
}

const removeProvider = email => {
    console.log('Mail enviado para eliminar:')
    console.log(email)
    return async (dispatch) => {
        const res = await axios.delete('https://viandasya-c1a.herokuapp.com/rest/provider/'+email)
        const responseData = res.data
        dispatch({
            type: "REMOVE_PROVIDER",
            provider: ""
        })
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
            selectedProvider: responseData
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

export {setHoursProvider, removeFromProviders, purchase, editProvider, addToProviders, removeProvider, loginProvider, getProvider, addUser, addProvider, getUser, selectMenu, getMenus, getCities, };