import './gridcell.component.css';
import { PencilSquare, Trash } from "react-bootstrap-icons"


export function GridCell(props){
    let values=Object.values(props.value)

    //create a fn for edit item
    function editItem(){
        props.editItemFromCell(props.value)
    }
    return(
          <>
          {
             values.map((item)=><td>{item}</td>)
          }
          <td>
            
                <PencilSquare className="edit-icon" 
                onClick={()=>{editItem()}}></PencilSquare>&nbsp;&nbsp;
                   <Trash className='delete-icon'></Trash>
          </td>
          
          </>
    )
}


//here we created one fn to hold values data