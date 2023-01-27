import { takeLatest, call, all, put } from "redux-saga/effects";
import USER_ACTION_TYPES from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";
import { createUserDocumentFromAuth, getCurrentUser } from "../../utils/firebase/firebase.utils";


export function* getSnapShotFromUserAuth(userAuth, additionDetails){
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth,userAuth, additionDetails);
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield all(getCurrentUser);
        if(!userAuth) return
        yield call(getSnapShotFromUserAuth, userAuth)
    } catch (error) {
        
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSaga(){
    yield all([call(onCheckUserSession)])
}