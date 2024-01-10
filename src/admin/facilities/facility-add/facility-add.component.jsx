
import { getFacilityType, saveFacilityAdd, updataFacilityType } from '../../../service/facility.service';
import './facility-add.component.css';
import React from "react";

export class FacilityAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FacilitySecurity: []
        }
    }

    //create reference
    nameRef = React.createRef();
    selectRef = React.createRef();
    numberFeeetRef = React.createRef();
    numberDetailsref = React.createRef();
    placeRef = React.createRef();
    checkRef = React.createRef();
    checkOneRef = React.createRef();



    //onload action
    componentDidMount() {
        getFacilityType().then((res) => {
            let data = res.data.filter((item) => item.isActive)
            this.setState({ FacilitySecurity: data })

        }).catch((ex) => {
            alert(ex.message)
        })
    }
    saveAddFacilty(event) {
        event.preventDefault();
        let data = {
            id: 0,
            isFname: this.nameRef.current.value,
            isSelect: this.selectRef.current.value,
            isFeet: this.numberFeeetRef.current.value,
            isDetails: this.numberDetailsref.current.value,
            isPlace: this.placeRef.current.value,
            isCheck: this.checkRef.current.checked,
            isCheckOne: this.checkOneRef.current.checked

        }
        if (data.id==0) {
            saveFacilityAdd(data).then((res)=>{
                alert("data saved succesfully");
            }).catch((ex)=>{
                alert("data failed!!!!.....");
            })
            .finally(()=>{
                this.clear();
            })
            
        }
        else{
            updataFacilityType(data).then((res)=>{
                alert("data updated successfuully");
            }).catch((ex)=>{
                alert("data failed!!!!.........");
            })
            .finally(()=>{
                this.clear();
            })
        }
        
    }

    clear() {
        this.nameRef.current.value = "";
        this.selectRef.current.value = "";
        this.numberFeeetRef.current.value = "";
        this.numberDetailsref.current.value = "";
        this.placeRef.current.value="";
        this.checkRef.current.checked = false;
        this.checkOneRef.current.checked = false;
     
       
    }

    render() {
        return (
            <div>
                <h1 className="property-typeheader">Facility Add</h1>
                <form onSubmit={(event)=>{
                    this.saveAddFacilty(event);
                }}>
                   
                    <div className="form-group row mt-5">
                        <label>Name</label>
                        <div className="col-9">
                            <input type="text" className="form-control " ref={this.nameRef} ></input>

                        </div>
                    </div>

                    <div className=" form-group row mt-4">
                        <label>Security Type</label>
                        <div className="col-9">
                            <select className="form-control " ref={this.selectRef}>
                                <option value="">...select...</option>
                                {
                                    this.state.FacilitySecurity && this.state.FacilitySecurity.map((item, index, arr) =>
                                        <option value={item.id}>{item.securityLockers}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                    <div className=" form-group row mt-4">
                        <label>Square Feet</label>
                        <div className="col-9">
                            <input type="number" className="form-control " ref={this.numberFeeetRef}></input>
                        </div>
                    </div>

                    <div className="form-group row mt-4">
                        <label>Details</label>
                        <div className="col-9">
                            <textarea type="data" className="form-control" ref={this.numberDetailsref}></textarea>
                        </div>
                    </div>

                    <div className=" form-group row mt-4">
                        <label>Place of Site</label>
                        <div className="col-9">
                            <input type="date" className="form-control " ref={this.placeRef}></input>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="form-check form-switch mt-2">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={this.checkRef} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">House Loan</label>
                        </div>

                        <div className="form-check form-switch mt-2">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={this.checkOneRef} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Personal Loan</label>
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Add Facility" className="btn btn-success mt-3"></input>&nbsp;&nbsp;&nbsp;
                        <input type="reset" value="cancel" className="btn btn-danger mt-3"></input>
                    </div>
                </form>
            </div>
        )
    }
}