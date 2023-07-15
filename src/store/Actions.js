import * as types from './ActionTypes';
import { auth } from '../components/frebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const loginStart = ()=>({
    type:types.LOGIN_START,
});

const loginSuccess =(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
});

const loginFail =(error)=>({
    type:types.LOGIN_FAIL,
    payload:error,
});

const logoutStart = ()=>({
    type:types.LOGOUT_START,
});

const logoutSuccess =()=>({
    type:types.LOGOUT_SUCCESS,
});

const logoutFail =(error)=>({
    type:types.LOGOUT_FAIL,
    payload:error,
});

export const loginInitiate = (email,password)=>{
    return function (dispatch){
        dispatch(loginStart());
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            dispatch(loginSuccess(user));
        })
        .catch((error)=> dispatch(loginFail(error.message)));
    };
};

export const logoutInitiate = ()=>{
    return function (dispatch){
        dispatch(logoutStart());
        auth
        .signOut()
        .then((resp)=>dispatch(logoutSuccess()))
        .catch((error)=> dispatch(logoutFail(error.message)));
    };
};