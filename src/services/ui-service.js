import store from "../store";
import uiSlice from "../store/slices/ui"

export function toggleBackdrop() {
    store.dispatch(uiSlice.actions.toggleBackdrop())
}