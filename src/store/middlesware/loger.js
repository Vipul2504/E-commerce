//building our Middleware

export const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.types){
        return next(action);
    }
     

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentuser: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}
