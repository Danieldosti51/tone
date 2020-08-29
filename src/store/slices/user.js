import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    isLoggedIn: false,
    apiUrl: 'http://localhost:8080/api'
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.username = null;
            state.isLoggedIn = false;
        },
    },
});

export const getUsername = (state) => state.user.username;
export const getLoggedIn = (state) => state.user.isLoggedIn;
export const getApiurl = (state) => state.user.apiUrl;

export default user;