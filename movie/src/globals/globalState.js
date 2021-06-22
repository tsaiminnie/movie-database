import React from 'react';
import globalHook from 'use-global-hook';
import { favStorage } from './globals';

function getFavs() {
    let favsStorage = localStorage.getItem(favStorage);
    if(favsStorage === null){
        favsStorage = [];
    } else {
        favsStorage = JSON.parse(favsStorage);
    }
    return favsStorage;
}

const actions = {
    addFav: (store, movie) => {

        const newFav = [...store.state.favs, movie];

        const newFavToStore = JSON.stringify(newFav);
        localStorage.setItem(favStorage,newFavToStore);

        store.setState({favs: newFav});
    },

    removeFav: (store, id) => {

        let currentFavs = store.state.favs;

        const indexForMovieToRemove = currentFavs.findIndex((movie) => movie.id === id);
        currentFavs.splice(indexForMovieToRemove, 1);

        let favsStorage = JSON.stringify(currentFavs);
        localStorage.setItem(favStorage, favsStorage);

        store.setState({favs: currentFavs});
    },
}

const initialState = {
    favs: getFavs()
}


const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;