


//set
export function setSessionStorage(key,value){
    if (typeof(value)=="object") {
        value=JSON.stringify(value);
    }
    sessionStorage.setItem(key,value);
}

//get
export function getSessionStorage(key){
    return sessionStorage.getItem(key);
}

//remove
export function removeSessionStorage(key){
    sessionStorage.removeItem(key);
}