import { GridCell } from "../gridcell/gridcell.component";


 export function GridRow(props){
    return(
        
        <tr>
            {
                <GridCell value={props.rowData} editItemFromCell={(value)=>{
                   props.editItemFromRow(value)
                }}></GridCell>
            }
        </tr>
    )
 }

