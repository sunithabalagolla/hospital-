import { useForm } from 'react-hook-form';
import './login.component.css';
import { getUser } from '../../service/user.service';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../service/storage/local.storage';
import store from '../../service/storage/redux.storage';
import { useEffect } from 'react';

export function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navtoadmit = useNavigate();


    function loginUser() {
        const registeredEmail = document.getElementById("email").value;
        const registeredPassword = document.getElementById("password").value;
        getUser().then((res) => {
            let filterData = res.data.filter((item, index, array) => item.email == registeredEmail && item.password == registeredPassword)

            if (filterData.length > 0) {
                setLocalStorage("users",filterData)
               store.dispatch({type:'userData',data:filterData})
                navtoadmit("/admin/property-type")
                alert("user exist")
            }
            else {
                alert("user not found")
            }
        })

            .catch((ex) => {
                alert(ex.message)
            })
    }
//clear the data before login
useEffect(()=>{
    store.dispatch({type:'userData',data:null})
},[])


    return (
        <div className='loginbackground'>
            <div className="container logindiv">
                <form>

                    <h1 className='loginhead mt-5'>LOG IN</h1> <hr style={{color:"white"}}></hr>

                    <div className="row">
                        <div className="col-9 emaildiv">
                            <input{...register("email", { required: true })}
                                type="email" placeholder="Email" className="form-control p-2 inputemail " id='email' ></input>
                        </div>
                        {
                            errors && errors.email ? <span className='text-danger spanerror'>Please enter Email </span> : ""
                        }
                    </div>

                    <div className="row">
                        <div className="col-9 passworddiv">
                            <input
                                {...register("password", { required: true })} type="password"
                                placeholder="Password" className="form-control p-2 inputpassword" id='password'></input>
                        </div>
                        {
                            errors && errors.password ? <span className='text-danger spanerror'>Please enter password </span> : ""
                        }
                    </div>
                     <div>

                    <div>
                        <input
                            type='checkbox' className='inputcheckbox mt-5' ></input>
                        <label>Remember Me</label>
                    </div>

                </div> 


                    <div className="row">
                        <div className="col-8">
                            <input type="button" value="Log in" className='loginbth ' onClick={handleSubmit(
                                () => { loginUser() }
                            )} ></input>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    )
}