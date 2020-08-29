import axios from "axios";

import store from "../store";
import * as auth from './auth-service';

export function http() {
    return axios.create({
        baseURL: store.getState().user.apiUrl,
        headers: {
            Authorization: auth.getToken()
        }
    });
}