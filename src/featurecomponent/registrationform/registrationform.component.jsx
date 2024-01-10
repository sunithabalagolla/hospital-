import './registrationform.component.css';
import { saveUser } from '../../service/user.service';
import { useForm } from 'react-hook-form';

export function RegistrationForm() {




    //function for registration data
    function saveRegistrartionData() {
        let data = {
            id: 0,
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,

            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            address: document.getElementById("address").value,
            dob: document.getElementById("dob").value,

            number: document.getElementById("number").value,
            State: document.getElementById("inputState").value,

        }
        saveUser(data).then(() => {

            alert("data saved sucessfully!...");


        }).catch(() => {

            alert("data failed!...");

        });
    }


    //create validation for useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (

        
            <div className="bgouter">

                <h2 style={{ color: 'white', fontSize: '41px', fontFamily: 'cursive' }} className='text-center bg-success '>Get Connected-Register Now</h2>
                <div className='divinner '>
                    <form className='divinnerone  '>
                        <h2 className='p-4 text-center ' style={{ color: 'black',fontSize:'38px' }}>Start Exploring!</h2>

                        <div className="row container1 ">

                            <div className="col-4">
                                <label>First Name</label>
                                <input{...register("fname", { required: true, minLength: 2, maxLength: 20 })}
                                    type="text" placeholder="FirstName" className="form-control" id='firstname'></input>
                                {
                                    errors.fname && errors.fname.type === "required" ? <span className='text-danger'>enter first name</span> :
                                        errors.fname && errors.fname.type === "minLength" ? <span className='text-danger'>Enter atleast 3 character</span> :
                                            errors.fname && errors.fname.type === "maxLength" ? <span className='text-danger'>Don't exceed more than 20 characters</span> : ""
                                }
                            </div>


                            <div className="col-4">
                                <label>Last  Name</label>
                                <input{...register("lname", { required: true, minLength: 2, maxLength: 20 })}
                                    type="text" placeholder="LastName" className="form-control" id='lastname'></input>
                                {
                                    errors.lname && errors.lname.type === "required" ? <span className='text-danger'>enter last name</span> :
                                        errors.lname && errors.lname.type === "minLength" ? <span className='text-danger'>Enter atleast 3 character</span> :
                                            errors.lname && errors.lname.type === "maxLength" ? <span className='text-danger'>Don't exceed more than 20 characters</span> : ""
                                }
                            </div>

                        </div>

                        <div className="row container1">
                            <div className="col-8">
                                <label>Email address</label>
                                <input {...register("email",{required:true,
                            pattern:{
                                 value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                 message:'email format eg:name@domain.com'
                            }
                            
                            
                        })}
                                type="email" placeholder="Email" className="form-control" id='email'></input>
                            </div>
                            {
                                errors.email && errors.email.type==="required"?<span className='text-danger'>please enter your email</span>:
                                errors.email && errors.email.message?<span className='text-danger'>{errors.email.message}</span>:''
                            }
                        </div>

                        <div className="row container1">
                            <div className="col-8">
                                <label>Password</label>
                                <input{...register("password",{required:true,
                                pattern:{
                                    value:/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
                                    message:'8 character ,digits,letters,symbols'


                                }})}
                                 type="password" placeholder="password" className="form-control" id='password'></input>
                            </div>
                            {
                                errors.password && errors.password.type==="required"?<span className='text-danger'>please enter your number</span>:
                                errors.password && errors.password.message?<span className='text-danger'>{errors.password.message}</span>:''
                            }
                        </div>

                        <div className="row container1">
                            <div className="col-8">
                                <label>Address</label>
                                <input{...register("address",{required:true})} 
                                type="address" placeholder="Address" className="form-control" id='address'></input>
                            </div>
                            {
                                errors && errors.address?<span className='text-danger'>Please enter your address</span>:""
                            }
                        </div>

                        <div className="row container1">
                            <div className="col-8">
                                <label>DOB</label>
                                <input{...register("date",{required:true})} 
                                type="date" placeholder="DOB" className="form-control" id='dob'></input>
                            </div>
                            {
                                errors && errors.date?<span className='text-danger'>Please enter your dob</span>:""
                            }
                        </div>

                        <div className="row container1">
                            <div className="col-8">
                                <label>Phone Number</label>
                                <input{...register("number",{required:true,
                                pattern:{
                                    value:/^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/,
                                    message:'number should be eg:9992323232'
                                }
                                })}
                                type="number" placeholder="Phone number" className="form-control" id='number'></input>
                            </div>
                            {
                                errors.number && errors.number.type==="required"?<span className='text-danger'>Please enter number</span>:
                                errors.number && errors.number.message?<span className='text-danger'>{errors.number.message}</span>:''
                            }
                        </div>


                        <div className="row container1">
                            <div class="col-8">
                                <label for="inputState" className="form-label">State</label>
                                <select
                                id="inputState" className="form-select" >
                                    <option selected>Choose...</option>
                                    <option>Andrapradesh</option>
                                    <option>Arunachalpradesh</option>
                                    <option>Assam</option>
                                </select>
                            </div>
                        </div>


                        <div className="row container1">
                            <div class="col-8">
                                <input type="button" value="submit" className='submitbtn m-3 ' onClick={handleSubmit((data) => {
                                    saveRegistrartionData(data)
                                })}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        

    )
}