import logger from "redux-logger";

import {createStore, compose, applyMiddleware} from 'redux'
import { rootReducer } from "./root-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";




const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares))


const persistConfig = {
    key : 'root',
    storage,
    blacklist : ['user']
}

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistore = persistStore(store)