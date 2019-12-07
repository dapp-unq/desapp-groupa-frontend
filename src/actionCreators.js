import React from 'react';
import { generate } from 'shortid';

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

const getProviders = () => {

    const provsFalsos = {
        providers: [{
            key: generate(),
            name: 'Liza Chambi',
            city: 'Luis Guillón',
            direction: 'Vidal 1015',
            },{
            key: generate(),
            name: 'Melody Orellana',
            city: 'Monte Grande',
            direction: 'Boulevar 1020',
            },{
            key: generate(),
            name: 'Nahuel Benitez',
            city: 'Quilmes',
            direction: 'Agote 2743',
            },
        ],
    }

    return {
        type: "GET_PROVIDERS",
        provider = provsFalsos
    }
}

export {removeFromProviders, addToProviders};