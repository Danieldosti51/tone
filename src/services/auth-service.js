import {http} from "./http-service";
import userSlice from "../store/slices/user";
import store from "../store";
import jwt from "jsonwebtoken";

export function submitLogin(e, username, password) {
    e.preventDefault();
    const user = {
        username: username,
        password: password
    }
    return authenticate(user);
}

function authenticate(user) {
    return http().post('/auth', user)
        .then(res => {
            if (res) {
                setToken(res.data.token);
                store.dispatch(userSlice.actions.login(user.username));
            }
        });
}

function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {
    const token = decodeToken();
    return !token ? null : token.user.username;
}

function getUserId() {
    const token = decodeToken();
    return !token ? null : token.user.id;
}

function decodeToken() {
    const token = getToken();
    return !token ? null : jwt.decode(JSON.parse(token));
}

