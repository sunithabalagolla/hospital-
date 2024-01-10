
//When data is saved, a success message is shown, and the grid is updated with the new data.


import './property-type.component.css';
import { deletePropertyType, getPropertyType, savePropertyType, updataPropertyType } from '../../../service/property.service';
import { useRef, useState, useEffect } from 'react';
import { GridComponent } from '../../../sharecomponents/grid/grid.component';

export function PropertyTypeComponent() {

   //create a variable for header data
   const [propertyTypeGridHeader, setPropertyTypeGridHeader] = useState(["ID", "PropertyType", "Description", "Action",]);


   // create a variable to show successalert
   const [showSaveMsg, setShowSaveMsg] = useState(false);//data saved successfully  msg is hidden default when saveproperetytypedata is saved succesdfully it become ture


   //create a variable for body data
   const [propertyTypeGridData, setPropertyTypeGridData] = useState([]);



   //create a variable to store input fields
   const propertyTypeRef = useRef();
   const description = useRef();
   const propertyTypeId=useRef(0);


   //create a variable for button text
   const [saveBtnText, setSaveBtnText] = useState("save");

   //create a variable for id
   const [propertyId, setPropertyId] = useState(0);




   // hiding save datasuccessfully message after some delay
   function hideSuccessMsg() {
      setTimeout(() => {
         setShowSaveMsg(false);
      }, 2000)
   }




   //function for save property type data, savePropertyTypeData is a function for saving property type data. It collects the data from the input fields, sends it to a server, and displays a success message upon successful saving.
   function savePropertyTypeData() {
      let data = {
         id: propertyId,
         propertytype: propertyTypeRef.current.value,
         Description: description.current.value,
         isActive: true
      };
      if (propertyId == 0) {//save a new property type.
         savePropertyType(data).then((res) => {
            setShowSaveMsg(true);
            clearData();
            getPropertyTypeData();

         }).catch(() => {
            alert("failed to save your property")
         })
      }
      else {
         updataPropertyType(data).then((res) => {//it means the user is updating an existing property type.
            setShowSaveMsg(true);
            clearData();
            getPropertyTypeData();

         }).catch(() => {
            alert("failed to save your property")
         })

      }
   }
   // clearData is a function that clears the input fields and hides the success message.
   function clearData() {
      // document.getElementById("propertytype").value = ""
      // document.getElementById("description").value = ""
      // document.getElementById("id").value = ""
      // hideSuccessMsg();

      propertyTypeRef.current.value = "";
      description.current.value = "";
      propertyTypeId.current.value = ""; 
      hideSuccessMsg();
   
      // data update ayyaka malli return save btn a ravali
      setSaveBtnText("save");
     
      setPropertyId(0);

      // //data update ayyaka malli return save btn a ravali 
      // setSaveBtnText("save");

      // setPropertyId(0);
   }


   //create a fn to get dtaa from api
   function getPropertyTypeData() {
      getPropertyType().then((res) => {
         setPropertyTypeGridData(res.data);
      })
   }

   //to perform onload data we use useeffect(),useEffect is used to fetch property type data when the component loads.
   useEffect(() => {
      getPropertyTypeData();
   }, [])


   //fn for edit property type data
   function editPropertyTypeItem(value) {
      propertyTypeId.current.value=value.id;
      propertyTypeRef.current.value = value.propertytype;
      description.current.value = value.Description;
      //update btn change
      setSaveBtnText("update");
      setPropertyId(value.id);
   }


   //create fn for delete proeprety type data
   function deletePropertyTypeRecord(value) {
      let confrimDelete = window.confirm("Are You sure you want to delete the record")
      if (confrimDelete == true) {
         deletePropertyType(value.id)
         .then((res) => {
            //   setShowSaveMsg(true);
            clearData();
              getPropertyTypeData();
   
             }).catch(() => {
               alert("failed to delete your property")
            })
         
         // let data = {
         //    id: value.id,
         //    propertytype: value.propertytype,
         //    Description: value.Description,
         //    isActive: false
         // };
         // updataPropertyType(data).then((res) => {//it means the user is updating an existing property type.
         //    setShowSaveMsg(true);
         //    clearData();
         //    getPropertyTypeData();

         // }).catch(() => {
         //    alert("failed to delete your property")
         // })
      }
   }



   return (
      <div>
         <h1 className="property-typeheader">Property Type</h1>
         <form method="post" action='http://localhost:4000/savePropertyTypes'>

            <div>
               <input ref={propertyTypeId}
                  type='hidden' className='form-control'  name='propertyTypeId'></input>
            </div>

            <div className="row mt-5">
               <div className="col-1">
                  <label style={{ fontSize: '29px' }}>Type:</label>
               </div>
               <div className='col-7'>
                  <input ref={propertyTypeRef}
                     type='text' className='form-control' id='propertytype' name='propertytype'></input>
               </div>
               {/* {
                  errors && errors.property ? <span className='text-danger'>please fill this blank</span> : ''
               } */}
            </div>

            <div className='row mt-5'>
               <div className='col-1'>
                  <label style={{ fontSize: '29px' }}>Description:</label>
               </div>
               <div className='col-7'>
                  <textarea ref={description}
                     rows={3} className='form-control' id='description' name='Description'></textarea>
               </div>
               {/* {
                  errors && errors.description ? <span className='text-danger' id='description'>please fill this blank</span> : ''
               } */}
            </div>

            <div className='row mt-5'>
               <div className='col-1'></div>
               <div className='col-6'>
                  <input type='submit' value={saveBtnText} className='btn btn-success greenbtn'></input>&nbsp;&nbsp;&nbsp;
                  <input type='button' value="cancel" className='btn btn-danger greenbtn' onClick={() => { clearData() }}></input>
               </div>
               {
                  showSaveMsg && <div className='col-4 alert-msg'>Data saved successfully</div>
               }
            </div>

         </form>





         <h2 className='propertytypegridhead'>Property Type Grid</h2>


         
         <GridComponent
            headers={propertyTypeGridHeader}

            body={propertyTypeGridData}


            
            editItemFromGrid={(value) => {
               editPropertyTypeItem(value)
            }}
            deleteRecord={(value) => { deletePropertyTypeRecord(value) }}>
         </GridComponent>
      </div>
   )
}