import './about.component.css';

import { Link } from 'react-router-dom';
import abouthome from '../../assests/images/home5.jpg';
import { Envelope, Facebook, Instagram, Mailbox, Twitter } from 'react-bootstrap-icons';


export function AboutComponent() {
    return (
        <div className="section" >

            <div className='section-head'>
                <h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '90px', color: 'brown' }}>About Us</h1>
            </div>

            <div className='row content'>

                <div className='sections-head col-5 '>
                    <h1>Welcome to our website</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet aspernatur libero, id fuga quod voluptatibus consectetur perferendis iure! Deserunt libero, quo labore illo nisi reprehenderit deleniti autem, maxime facere iusto velit. Incidunt praesentium, laudantium distinctio doloremque quis ratione quos?</p>
                    <div className="button">
                        <button>Learn  More</button>
                    </div>
                </div>




                <div className="image-section col-1">
                    <img src={abouthome}></img>
                </div>

                <div className='col-6 icons'>
                    <Facebook></Facebook>
                    <Instagram></Instagram>
                    <Twitter></Twitter>
                    <Envelope></Envelope>
                </div>





            </div>


        </div>
    )
}