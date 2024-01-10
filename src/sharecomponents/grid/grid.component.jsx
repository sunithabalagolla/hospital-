import { PencilSquare, Trash } from 'react-bootstrap-icons'
import { GridRow } from '../../atomiccomponents/gridrow/gridrow.component'
import './grid.component.css'

export function GridComponent(props) {
    // const headers = ["id", "name", "email"]

//    function sawHeader(item){
//     return(
//         <th>{item}</th>
//     )
//    }

    // let body = [
    //    {
    //        id: 12,
    //        name: "sunitha",

    //         email: "suni@123",

    //     },
    //  {
    //        id: 13,
    //       name: "john",

    //          email: "john@123"

    //      },
    //     {
    //         id: 14,
    //         name: "jack",

    //         email: "jack@123"

    //     }

    //  ]
    //   function gridRow(item){
    //     return(
    //         <tr>{gridCell(item)}</tr>
    //     )
    //   }
    //  function gridCell(item){
    //     return(
    //         <>
    //         <td>{item.id}</td>
    //         <td>{item.name}</td>
    //         <td>{item.email}</td>
    //         </>
    //     )
    //  }
    // function gridCell(item){
    //     let keys=Object.keys(item)
    //     return(
    //         <>
    //         {
    //              keys.map((item)=><td>{item}</td>)
    //         }
    //         </>
    //     )
    // }
    // (item)=>{
        
    //         <td>{item}</td>
        
    







    
    
    //create a fn for edit item
    function editItem(item){
        props.editItemFromGrid(item)
    }
   
    //create a fn fro delete item
 function deleteItem(item){
    props.deleteRecord(item)
 }
    


    return (
        <>
           <table className='table table-bordered table-hover  container arrangement'>
           
            <thead className='table-primary '>
                <tr>
                    {
                        props.headers.map((item)=><th>{item}</th>)
                    }
                </tr>
            </thead>

            <tbody>
               {
                props.body.map((item)=>
                <tr>
                    {
                      Object.values(item).map((item)=><td>{item}</td>)
                    }
                    
                    <td>
                    <PencilSquare className="edit-icon" 
                       onClick={()=>{editItem(item)}}></PencilSquare>&nbsp;&nbsp;
                   <Trash className='delete-icon'
                   onClick={()=>{deleteItem(item)}}></Trash>
                    </td>
                </tr>
                )
               }
            </tbody>
            </table> 
        </>
    )
}