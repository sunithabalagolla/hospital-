

//save 
export function setLocalStorage(key,value){
    if (typeof(value)=="object") {
       value=JSON.stringify(value);
    }
    localStorage.setItem(key,value);
}

//get
export function getLocalStorage(key){

    return localStorage.getItem(key);
    
}

//remove
export function removeLocalStorage(key){
    localStorage.removeItem(key);
}



