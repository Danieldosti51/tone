import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    backdrop: false
};

const ui = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleBackdrop: (state) => {
            state.backdrop = !state.backdrop;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    }
});

export const isLoading = (state) => state.ui.loading;
export const hasBackdrop = (state) => state.ui.backdrop;

export default ui;