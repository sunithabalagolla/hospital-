import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";


//reducer functionm
const reducer = (state,action) => {
    switch (action.type) {
        case "propertyTypes":
          return {
              ...state,propertyTypes:action.data
            }
            case "userData":
              return{
                ...state,userData:action.data
              }
              case "facilityTypes":
                return{
                  ...state,facilityTypes:action.data
                }


    }
}

//create a store variable and export
const store = configureStore({reducer:reducer});
export default store;