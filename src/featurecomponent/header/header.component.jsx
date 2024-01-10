import './header.component.css';

import houselogo from '../../assests/images/house.png'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { House } from 'react-bootstrap-icons';
import store from '../../service/storage/redux.storage';


export function HeaderComponent() {

    //create useState
    const [userLoggedIn, setUserLoggedIn] = useState(false);


    //Subscription
    useEffect(() => {
       
        store.subscribe(() => {
            let loginData = store?.getState()?.userData;
            let isUserLoggedIn = loginData ? true : false;
            setUserLoggedIn(isUserLoggedIn);
        });
    }, []);

    const location = useLocation();

    // -----------------register----------------------------
    const [headerBackgroundColor, setHeaderBackgroundColor] = useState("black");
    const [headerUnorderedList, setHeaderUnorderedList] = useState("red");
    const [headerIcon, setHeaderIcon] = useState("rgb(238, 181, 96)");


    // ------------------------register useeffect------------------------------
    useEffect(() => {
        if (location.pathname === '/register') {
            setHeaderBackgroundColor('darkgreen');
            setHeaderUnorderedList('white');
            setHeaderIcon('lightgreen')
        }
        else if (location.pathname === '/login') {
            setHeaderBackgroundColor('black');
            setHeaderUnorderedList('#eacc80');
            setHeaderIcon('#eacc80');
        }
        else if (location.pathname === '/about') {
            setHeaderBackgroundColor('brown');
            setHeaderUnorderedList('white');
            setHeaderIcon('white');

        }
        else if (location.pathname === '/contactus') {
            setHeaderBackgroundColor('rgb(17, 58, 93)');
            setHeaderUnorderedList('white');

        }
        else if (location.pathname === '/home') {
            setHeaderBackgroundColor('darkslategrey');
            setHeaderUnorderedList('white');

        }
        else {
            setHeaderBackgroundColor('brown');
            setHeaderUnorderedList('white');

        }

    }, [location]);








    return (
        <>
            <div className="headerdiv" style={{ backgroundColor: headerBackgroundColor }}>

                <img src={houselogo} alt='house logo' className='imghouse'></img>
                <ul className="headerul " >

                    <Link to="/home"><li style={{ color: headerUnorderedList }}>Home</li></Link>

                    <Link to="/about"><li style={{ color: headerUnorderedList }}>About</li></Link>

                    <Link to="/contactus"><li style={{ color: headerUnorderedList }}>ContactUs</li></Link>

                    <li style={{ color: headerUnorderedList }}>Blog</li>

                    {!userLoggedIn &&
                        <>
                            <Link to="/register"> <li style={{ color: headerUnorderedList }}>Register</li></Link>

                            <Link to="/login"><li style={{ color: headerUnorderedList }}>Login</li></Link>
                        </>
                    }

                    {userLoggedIn &&
                        <>
                            <Link to="/admin/property-type"><li style={{ color: headerUnorderedList }}>Admin</li></Link>

                            <Link to="/login"><li style={{ color: headerUnorderedList }}>Logout</li></Link>
                        </>
                    }
                </ul>
            </div>
        </>
    )
}