
import './facility-type.component.css';
import { getFacilityType,saveFacilityType,updataFacilityType } from '../../../service/facility.service';
import { useRef, useState, useEffect } from 'react';
import { GridComponent } from '../../../sharecomponents/grid/grid.component';




export function FacilityTypeComponent() {

   //create a variable for header data
   const [facilityTypeGridHeader, setFacilityTypeGridHeader] = useState(["ID", "Security", "Fitness center","Pool","Lockers", "Action",]);


   // create a variable to show successalert
   const [showSaveMsg, setShowSaveMsg] = useState(false);//data saved successfully  msg is hidden default when saveproperetytypedata is saved succesdfully it become ture


   //create a variable for body data
   const [facilityTypeGridData, setFacilityTypeGridData] = useState([]);



   //create a variable to store input fields
    const securityTypeRef=useRef();
    const fitnessRef=useRef();
    const poolRef=useRef();
    const lockersRef=useRef();

   //create a variable for button text 
   const [saveBtnText, setSaveBtnText] = useState("save");

   //create a variable for id
   const [facilityId, setFacilityId] = useState(0);//---------------------------------------




   // hiding save datasuccessfully message after some delay
   function hideSuccessMsg() {
      setTimeout(() => {
         setShowSaveMsg(false);
      }, 2000)
   }




   //function for save property type data, savePropertyTypeData is a function for saving property type data. It collects the data from the input fields, sends it to a server, and displays a success message upon successful saving.
   function saveFacilityTypeData() {
      let data = {
         id: facilityId,
          securityManagement:securityTypeRef.current.value,//backend :input ref data
          fitnesscenter:fitnessRef.current.value,
          swimmingPool:poolRef.current.value,
          securityLockers:lockersRef.current.value,

           isActive: true
      };
      if (facilityId == 0) {//save a new property type.
         saveFacilityType(data).then((res) => {
            setShowSaveMsg(true);
            clearData();
            getFacilityTypeData();

         }).catch(() => {
            alert("failed to save your property")
         })
      }
      else {
         updataFacilityType(data).then((res) => {//it means the user is updating an existing property type.
            setShowSaveMsg(true);
            clearData();
            getFacilityTypeData();

         }).catch(() => {
            alert("failed to save your property")
         })

      }
   }
   // clearData is a function that clears the input fields and hides the success message.
   function clearData() {
      document.getElementById("security").value = ""
      document.getElementById("fitness").value = ""
      document.getElementById("pool").value = ""
      document.getElementById("lockers").value = ""

      hideSuccessMsg();

      //data update ayyaka malli return save btn a ravali 
      setSaveBtnText("save");

      setFacilityId(0);
   }


   //create a fn to get dtaa from api
   function getFacilityTypeData() {
      getFacilityType().then((res) => {
         setFacilityTypeGridData(res.data.filter((item)=>item.isActive==true));
      })
   }

   //to perform onload data we use useeffect(),useEffect is used to fetch property type data when the component loads.
   useEffect(() => {
      getFacilityTypeData();
   }, [])


   //fn for edit property type data
   function editFacilityTypeItem(value) {
    securityTypeRef.current.value=value.securityManagement;//ref:bacekend
    fitnessRef.current.value=value.fitnesscenter;
    poolRef.current.value=value.swimmingPool;
    lockersRef.current.value=value.securityLockers


      //update btn change
      setSaveBtnText("update");
      setFacilityId(value.id);
   }


   //create fn for delete proeprety type data
   function deleteFacilityTypeRecord(value) {
      let confrimDelete = window.confirm("Are You sure you want to delete the record")
      if (confrimDelete == true) {
         let data = {
            id: value.id,
            securityManagement:value.securityManagement,
            fitnesscenter:value.fitnesscenter,
            swimmingPool:value.swimmingPool,
            securityLockers:value.securityLockers,
            isActive: false
         };
         updataFacilityType(data).then((res) => {//it means the user is updating an existing property type.
            setShowSaveMsg(true);
            clearData();
            getFacilityTypeData();

         }).catch(() => {
            alert("failed to delete your property")
         })
      }
   }

  

   return (
      <div className='facilitydiv'>
         <h1 className="property-typeheader">Facilities Type</h1>
         <div>
            <div className="row mt-5">
               <div className="col-2">
                  <label style={{ fontSize: '29px' }}>Security Features:</label>
               </div>
               <div className='col-6'>
                  <input ref={securityTypeRef}
                     type='text' className='form-control' id='security'></input>
               </div>
            </div>

            <div className="row mt-5">
               <div className="col-2">
                  <label style={{ fontSize: '29px' }}>Fitness Center:</label>
               </div>
               <div className='col-6'>
                  <input ref={fitnessRef}
                     type='text' className='form-control' id='fitness'></input>
               </div>
            </div>

            <div className="row mt-5">
               <div className="col-2">
                  <label style={{ fontSize: '29px' }}>Swimming Pool:</label>
               </div>
               <div className='col-6'>
                  <input ref={poolRef}
                     type='text' className='form-control' id='pool'></input>
               </div>
            </div>

           

            <div className="row mt-5">
               <div className="col-2">
                  <label style={{ fontSize: '29px' }}>Package Lockers:</label>
               </div>
               <div className='col-6'>
                  <input ref={lockersRef}
                     type='text' className='form-control' id='lockers'></input>
               </div>
            </div>


            

            <div className='row mt-5'>
               <div className='col-1'></div>
               <div className='col-6'>
                  <input type='button' value={saveBtnText} className='btn btn-success greenbtn' onClick={() => { saveFacilityTypeData() }}></input>&nbsp;&nbsp;&nbsp;
                  <input type='button' value="cancel" className='btn btn-danger greenbtn' onClick={() => { clearData() }}></input>
               </div>
               {
                  showSaveMsg && <div className='col-4 alert-msg'>Data saved successfully</div>
               }
            </div>

         </div>
         <h2 className='propertytypegridhead'>Facility Type Grid</h2>
         <GridComponent
            headers={facilityTypeGridHeader}
            body={facilityTypeGridData}
            editItemFromGrid={(value) => {
               editFacilityTypeItem(value)
            }}
            deleteRecord={(value) => {deleteFacilityTypeRecord(value) }}>
         </GridComponent>
      </div>
   )
}