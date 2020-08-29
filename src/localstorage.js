import {getUsername} from "./services/auth-service";

export const loadState = () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return undefined;
        }
        return getUsername();
    } catch (e) {
        return undefined;
    }
}
//
// export const saveState = (state) => {
//     try {
//         const savedState = JSON.stringify(state);
//         localStorage.setItem('state', savedState);
//     } catch (e) {
//         console.trace();
//     }
// }