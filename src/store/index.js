import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user";
import uiSlice from  "./slices/ui";
import trackSlice from "./slices/tracks";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        ui: uiSlice.reducer,
        tracks: trackSlice.reducer
    },
});

export default store;