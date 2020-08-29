import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const tracks = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setTracks: (state, action) => {
            state.items = action.payload;
        },
        addTrack: (state, action) => {
            state.items = [...state.items, action.payload];
        }
    }
});

export const getAllTracks = (state) => state.tracks.items;

export default tracks;