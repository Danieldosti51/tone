import { http } from "./http-service";

export function submitRegister(e, username, password, cPassword) {
    e.preventDefault();
    const user = {
        username: username,
        password: password,
        confirmPassword: cPassword
    }
    return registerUser(user);
}

function registerUser(user) {
    return http().post('/register', user);
}