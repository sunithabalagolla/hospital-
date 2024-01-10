import { AdminMenuComponent } from "../admin-menu/admin-menu.component";

import { AddProperty } from "../property/property-add/add-property.component";
import { PropertyTypeComponent } from "../property/property-type/property-type.component";



export function AdminLayout() {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <AdminMenuComponent></AdminMenuComponent>
                </div>


                <div className="col-10">
                     {/* <PropertyTypeComponent></PropertyTypeComponent>  */}
                    <AddProperty></AddProperty>
                </div>

               

            </div>
        </div>
    )
}