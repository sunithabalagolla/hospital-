import axios from "axios";


export function get(url){
    return axios.get(url);
}


export function save(url,data){
    return axios.post(url,data);
}


export function update(url,data){
    return axios.put(url+data.id,data);
}

export function deleteData(url){
    return axios.delete(url);
}