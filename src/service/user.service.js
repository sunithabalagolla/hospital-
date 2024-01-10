
import { get, save } from "./context.service";


const url = "http://localhost:3000/users/";


export function getUser() {
    return get(url);
}


export function saveUser(data) {
    return save(url, data);
}