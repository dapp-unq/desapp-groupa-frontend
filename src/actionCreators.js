import React from 'react';
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

const getProvider = () => {
    return dispatch => {
        axios.get('https://viandasya-c1a.herokuapp.com/rest/provider/sarasa@gmail.com')
        .then(response =>{
            dispatch({
                type: "GET_PROVIDER",
                provider: response.data
            })
        })
    }
}

export {removeFromProviders, addToProviders, getProvider};