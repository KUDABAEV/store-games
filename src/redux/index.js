import {configureStore} from "@reduxjs/toolkit";
import gameReducer from './games/reducer';
import cartReducer from './cart/reducer';


export const store = configureStore({
    reducer:{
        cart: cartReducer,
        game: gameReducer,
    }
});

window.store = store;