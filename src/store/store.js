import logger from "redux-logger";

import {createStore, compose, applyMiddleware} from 'redux'


const middleWares = [loggerMiddleWare];
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)

//building our Middleware

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.types){
        return next(action);
    }
     

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentuser: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}