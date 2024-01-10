import {get,save, update} from "./context.service";


let facilityTypeUrl=" http://localhost:3000/facilitytype/";
let facitiltyAddUrl="http://localhost:3000/addfacility";

//create a function for getdata for propertytype
export function getFacilityType(){
    return get(facilityTypeUrl);
}


//create a function for save data for propertytype
export function saveFacilityType(data){
        return save(facilityTypeUrl,data);
}

//create a fn for updata data for propertype
export function updataFacilityType(data){
    return update(facilityTypeUrl,data);
}




//add facilty

//getdata for facilyty add
export function getFacilityAdd(){
    return get(facitiltyAddUrl);
}


//save
export function saveFacilityAdd(data){
    return save(facitiltyAddUrl,data);
}

//update
export function updataFacilityAdd(data){
    return update(facilityTypeUrl,data);
}