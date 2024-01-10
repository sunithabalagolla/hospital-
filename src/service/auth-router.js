import { Navigate } from "react-router-dom";
import { getLocalStorage } from "./storage/local.storage";



export function AuthRoute(props){
    let uservalid=false;//first user ledhu

    //check user

    uservalid=getLocalStorage('users');
    if(uservalid)//uservalid== (uservalid!=null && uservalid!=undefined)
    {
       return props.children;
    }
    else{
        return<Navigate to='/login'></Navigate>
    }
}