import './property-view.component.css';
import store from '../../../service/storage/redux.storage';

import React from "react";

import { getPropertyAdd, getPropertyType } from "../../../service/property.service";
import { getSessionStorage, setSessionStorage } from "../../../service/storage/session.storage";
import { PencilFill, Trash, Trash2Fill } from 'react-bootstrap-icons';

export class Propertyview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: [],
            propertyTypes:[]
        }
    }

    componentDidMount() {
        this.getPropertyViewData()
    } 

    getPropertyViewData() {
        getPropertyAdd().then((res) => {
                let data=res.data
               let propertyTypeValues= this.getPropertyTypeValues();
               data.map((item)=>item.isSelect=propertyTypeValues.
               find(data=>data.id==item.isSelect)?.propertytype);
        
            this.setState({ properties: data })
        })
            .catch(() => {
                alert("failed to get data")
            })
    }


    //create a fn for get propertytype id value
    getPropertyTypeValues(){
        let proTypes=store.getState()?.propertyTypes;

        // let proTypes=getSessionStorage("isSelect");
        if (!proTypes) {
             getPropertyType()
             .then((res)=>{
                proTypes=res.data
                store.dispatch({type:"propertyTypes",data:proTypes})
                // setSessionStorage("isSelect",res.data);
                this.setState({propertyTypes:res.data})
             })
            //  .catch(() => {
            //     alert("failed")
            // })
        }
        // else{
        //     proTypes=JSON.parse(proTypes);
        // }
        return proTypes;
    }

    render() {
        return (
            <div >
                <h1 className="property-typeheader">Property View</h1>
                {
                    this.state.properties && this.state.properties.map((item) => 

                    
                        <div className="card " style={{width:'1350px'}}>
                            <div className="card-header">{item.isFname}</div>
                            <div className="card-body">
                                <div>{item.isFeet}</div>
                                <div>{item.isSelect}</div>
                            </div>
                            <div className="card-footer">
                                <div><PencilFill></PencilFill></div>
                                <div><Trash></Trash></div>
                            </div>
                        </div>
                    

                    )
                }
            </div>
        )
    }
}