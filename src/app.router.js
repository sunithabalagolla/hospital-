import { Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./featurecomponent/registrationform/registrationform.component";
import { HomeComponent } from "./featurecomponent/home/home.component";
import { AboutComponent } from "./featurecomponent/aboutus/about.component";
import { LoginForm } from "./featurecomponent/loginform/login.component";
import { PropertyTypeComponent } from "./admin/property/property-type/property-type.component";
import { FacilityTypeComponent } from "./admin/facilities/facility-type/faciliity-type.component";
import { AdminMenuComponent } from "./admin/admin-menu/admin-menu.component";
import { AddProperty } from "./admin/property/property-add/add-property.component";
import { AuthRoute } from "./service/auth-router";
import { Propertyview } from "./admin/property/property-view/property-view.component";
import { ContactUs } from "./featurecomponent/contactus/contactus.component";
import { FacilityAdd } from "./admin/facilities/facility-add/facility-add.component";
import { FacilityView } from "./admin/facilities/facility-view/facility-view.component";



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/register" element={<RegistrationForm></RegistrationForm>}></Route>
            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
            {/* <Route path="/propertytype" element={<PropertyTypeComponent></PropertyTypeComponent>}></Route> */}
            <Route path="/admin/facilitytype" element={< NavigationFacilityType></ NavigationFacilityType>}></Route>
            <Route path="/admin/facilityadd" element={<NavigationFacilityTypesss></NavigationFacilityTypesss>}></Route>
            <Route path="/admin/facilityview" element={<NavigationFacilityView></NavigationFacilityView>}></Route>
            <Route path="/admin/property-type" element={<NavigationPropertyType></NavigationPropertyType>}></Route>
            <Route path="/admin/property-add" element={<NavigationPropertyAdd></NavigationPropertyAdd>}></Route>
            <Route path="/admin/property-view" element={<NavigationPropertyView></NavigationPropertyView>}></Route>
        </Routes>
    )
}

function NavigationPropertyType() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10">
                        <PropertyTypeComponent></PropertyTypeComponent>

                    </div>



                </div>
            </div>
        </AuthRoute>
    )
}
function NavigationPropertyView() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10">
                       <Propertyview></Propertyview>

                    </div>



                </div>
            </div>
        </AuthRoute>
    )
}
function NavigationPropertyAdd() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10 mt-3" >
                        <AddProperty></AddProperty>

                    </div>
                </div>
            </div>
        </AuthRoute>
    )
}
function NavigationFacilityType() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10 mt-3"  >
                        <FacilityTypeComponent></FacilityTypeComponent>

                    </div>



                </div>
            </div>
        </AuthRoute>
    )
}
function NavigationFacilityTypesss() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10 mt-3"  >
                        <FacilityAdd></FacilityAdd>

                    </div>



                </div>
            </div>
        </AuthRoute>
    )
}
function NavigationFacilityView() {
    return (
        <AuthRoute>
            <div>
                <div className="row">
                    <div className="col-2">
                        <AdminMenuComponent></AdminMenuComponent>
                    </div>


                    <div className="col-10 mt-3"  >
                        <FacilityView></FacilityView>

                    </div>



                </div>
            </div>
        </AuthRoute>
    )
}