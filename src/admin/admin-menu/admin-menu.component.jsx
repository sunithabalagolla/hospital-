import { Person } from 'react-bootstrap-icons';
import './admin-menu.component.css';
import { Link } from 'react-router-dom';


export function AdminMenuComponent() {
    return (
        <div className="admindiv">

            <h3 className='adminhead'><Person className='mb-3'></Person>Admin Module</h3>

            <ul className='main-ul' >
                <li><h1>Property</h1>
                    <ul className='sub-ul'>
                      <Link to="/admin/property-type" className='no-underline'> <li>Property Type</li> </Link>
                       <Link to="/admin/property-add" className='no-underline'> <li>Property Add</li></Link>
                       <Link to="/admin/property-view" className='no-underline'> <li>Property View</li></Link>
                    </ul>
                </li>

                <li><h1>Facilities</h1>
                    <ul className='sub-ul'>
                        <Link to="/admin/facilitytype" className='no-underline'><li>Facility Type</li></Link>
                       <Link  to="/admin/facilityadd"> <li>Facility Add</li></Link>
                        <Link to="/admin/facilityview"><li>Facility View</li></Link>
                    </ul>
                </li>

                <li><h1>Contact Us</h1></li>

                <li><h1>FAQ</h1></li>
            </ul>
        </div>

    )
}