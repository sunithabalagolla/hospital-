import './add-property.component.css';
import React from "react";
import { getPropertyType, savePropertyAdd, updatePropertyAdd } from '../../../service/property.service';



export class AddProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyTypes: []
        }
    }


    //create reference
    nameRef = React.createRef();
    selectRef = React.createRef();
    numberFeeetRef = React.createRef();
    numberDetailsref = React.createRef();
    dataRef = React.createRef();
    checkRef = React.createRef();
    checkOneRef = React.createRef();


    //class component onload action
    componentDidMount() {
        getPropertyType()
            .then((res) => {
                let data = res.data.filter((item) => item.isActive)
                this.setState({ propertyTypes: data })
            })
            .catch((ex) => {
                alert(ex.message)
            })
    }
    // you are using event.preventDefault() to prevent the default form submission behavior, allowing you to handle the form data submission using your own logic,
    saveAddProperty(event) {
        event.preventDefault();
        let data = {
            id: 0,
            isFname: this.nameRef.current.value,
            isSelect: this.selectRef.current.value,
            isFeet: this.numberFeeetRef.current.value,
            isDetails: this.numberDetailsref.current.value,
            isData: this.dataRef.current.value,
            isCheck: this.checkRef.current.checked,
            isCheckOne: this.checkOneRef.current.checked
        }
        if (data.id == 0) {
            savePropertyAdd(data).then((res) => {
                alert("data saved successfuully");
            }).catch((ex) => {
                alert("data failed!!!!.........");
            })
                .finally(() => {
                    this.clear();
                })
        }
        else {
            updatePropertyAdd(data).then((res) => {
                alert("data updated successfuully");
            }).catch((ex) => {
                alert("data failed!!!!.........");
            })
                .finally(() => {
                    this.clear();
                })
        }
    }

    clear() {
        this.nameRef.current.value = "";
        this.selectRef.current.value = "";
        this.numberFeeetRef.current.value = "";
        this.numberDetailsref.current.value = "";
        this.dataRef.current.value = "";
        this.checkRef.current.checked = false;
        this.checkOneRef.current.checked = false;
    }

    render() {

        return (
            <div>
                <h1 className="property-typeheader">Property Add</h1>
                <form onSubmit={(event) => {
                    this.saveAddProperty(event);
                }}>
                    <div className="form-group row mt-5">
                        <label>Name</label>
                        <div className="col-9">
                            <input type="text" className="form-control " ref={this.nameRef} ></input>
                        </div>
                    </div>

                    <div className=" form-group row mt-4">
                        <label>Property Type</label>
                        <div className="col-9">
                            <select className="form-control " ref={this.selectRef}>
                                <option value="">...select...</option>
                                {
                                    this.state.propertyTypes && this.state.propertyTypes.map((item, index, arr) =>
                                        <option value={item.id}>{item.propertytype}</option>
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
                        <label>Construction Data</label>
                        <div className="col-9">
                            <input type="date" className="form-control " ref={this.dataRef}></input>
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
                        <input type="submit" value="Add Property" className="btn btn-success mt-3"></input>&nbsp;&nbsp;&nbsp;
                        <input type="reset" value="cancel" className="btn btn-danger mt-3"></input>
                    </div>
                </form>

            </div>
        )
    }
}