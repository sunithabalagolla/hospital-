import {deleteData, get,save, update} from "./context.service";


let propertyTypeUrl="http://localhost:4000/propertyTypes/";

//url for properrty add
let propertyAddUrl="http://localhost:3000/addproperty";

//url for property delete
let properrtyDeleteUrl="http://localhost:4000/deletePropertyType/";


//create a function for getdata for propertytype
export function getPropertyType(){
    return get(propertyTypeUrl);
}


//create a function for save data for propertytype
export function savePropertyType(data){
        return save(propertyTypeUrl,data);
}

//create a fn for updata data for propertype
export function updataPropertyType(data){
    return update(propertyTypeUrl,data);
}

//create a fn for delete data for propertype
export function deletePropertyType(id){
    return deleteData(properrtyDeleteUrl+id);
}


//add proeprty
export function getPropertyAdd(){
    return get(propertyAddUrl);
}

export function savePropertyAdd(data){
    return save(propertyAddUrl,data);
}
export function updatePropertyAdd(data){
    return update(propertyAddUrl,data);
}
