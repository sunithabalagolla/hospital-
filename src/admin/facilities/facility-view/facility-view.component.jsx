import React from "react";
import { getFacilityAdd, getFacilityType } from "../../../service/facility.service";
import { PencilFill, Trash } from "react-bootstrap-icons";
import store from "../../../service/storage/redux.storage";


export class FacilityView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            facilities: [],
            facilityTypes: []
        }
    }
    componentDidMount() {
        this.getFacilityViewData()
    }
    getFacilityViewData() {
        getFacilityAdd()
            .then((res) => {
                let data = res.data
                let facilityTypeValues = this.getFacilityTypeValues();
                data.map((item) => item.isSelect = facilityTypeValues.
                    find(data => data.id == item.isSelect)?.facilitytype)
                this.setState({ facilities: data })
            })
            .catch(() => {
                alert("failed ro get data")
            })
    }




    //create a fn to get faciltytype id  values
    getFacilityTypeValues() {
        let factTypes = store.getState()?.facilityTypes;
        if (!factTypes) {
            getFacilityType().then((res) => {
                factTypes = res.data
                store.dispatch({
                    type: "facilityTypes",
                    data: factTypes
                })
                this.setState({ facilityTypes: res.data })
            })
        }
        return factTypes;
    }
    render() {
        return (
            <div>
                <h1 className="property-typeheader">Facility View</h1>
                {
                    this.state.facilities && this.state.facilities.map((item) => (
                        <>
                            <div className="card"></div>
                            <div className="card-header">
                                {
                                    item.isFname
                                }
                            </div>
                            <div className="card-body">
                                <div>{item.isFeet}</div>
                                <div>{item.isSelect}</div>
                            </div>
                            <div className="card-footer">
                                <PencilFill></PencilFill>
                                <Trash></Trash>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
}