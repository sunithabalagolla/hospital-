import { EnvelopeAt, GeoAlt, Map, Phone, Telephone } from "react-bootstrap-icons";
import './contactus.component.css';


export function ContactUs() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Have any questions?Reach out to us from our contact form  and<br></br> we will get back to you shortly</p>
            </div>

            <div className="containert">
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon"><GeoAlt></GeoAlt></div>
                        <div className="text">
                            <h2>Address</h2>
                            <p>20033  Hitech-tech camp Road,<br></br>Madhapur,Hyderabad<br></br>500018</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><Telephone></Telephone></div>
                        <div className="text">
                            <h2>Phone</h2>
                            <p>4045-389-980</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><EnvelopeAt></EnvelopeAt></div>
                        <div className="text">
                            <h2>Email</h2>
                            <p>propertyViews3230@gmail.com</p>
                        </div>
                    </div>
                </div>
                
                <div className="contactForm">
                    <form>
                        <h2 >Send Message</h2>
                        <br></br>
                        <div className="inputbox">
                            <input type="text" id="fullNameInput" required />
                            <span htmlFor="fullNameInput">Full Name</span>
                        </div>

                        <div className="inputbox">
                            <input type="email" id="emailInput" required />
                            <span htmlFor="emailInput">Email</span>
                        </div>
                        <div className="inputbox">
                            <textarea id="messageInput" required></textarea>
                            <span htmlFor="messageInput">Type Your Message</span>
                        </div>

                        <div className="inputbox">
                            <input type="submit " value="send" className="typesubmit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

