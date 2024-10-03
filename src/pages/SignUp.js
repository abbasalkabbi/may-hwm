import React from "react";
import {useState } from "react"
import axios from 'axios';
const SignUp= ()=>{
    const [err,SetErr]=useState(0)
    const [errinfo,SetErrinfo]=useState('')
    const [Name,SetName]=useState('')
    const [Email,SetEmail]=useState('')
    const [Phone,SetPhone]=useState('')
    const [Password,SetPassword]=useState('')
    const [City,SetCity]=useState('')
    function handleFormSubmit(e){
        e.preventDefault();
        let register_data={
            name: Name,
            email: Email,
            password:Password,
        }
        console.log(register_data)
        axios({
            method: 'post',
            url: `http://localhost/may-hwm/api/Controller/User.php?q=create`,
            headers: { 'content-type': 'application/json' },
            data: register_data
        }).then(result =>
            { 
                console.log(result.data)
                if(result.data.status ==false){
                    console.log(result.data.err)
                    SetErr(result.data.err)
                    SetErrinfo(result.data.message)
                }
            })
    }
    function Show_Error(){
        if(err !=0){
            return <> <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <div>
                            {errinfo}
                        </div>
                    </div>
            </>
        }
    }
return(
    <>
<section class="vh-100 bg-dark-subtle" >
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                {/* card */}
                <div class="card shadow-2-strong" >
                    {/* card body */}
                    <div class="card-body p-5 text-center">
                        <h3 class="mb-5  fw-bolder">Sign Up</h3>
                        {Show_Error()}
                        {/* Full Name */}
                        <div className={'d-input mb-3 d-flex flex-column align-items-start ' + (err==1?'error':'')}>
                            
                            <input type="text" class="form-control" id="name" required  onChange={(e)=>SetName(e.target.value)}/>
                            <label for="name" class="form-label">Full Name </label>
                        </div>
                        {/* Full Name end */}
                        {/* email */}
                        <div className={'d-input mb-3 d-flex flex-column align-items-start ' + (err==2?'error':'')}>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>SetEmail(e.target.value)}/>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                        </div>
                        {/* email end */}
                        {/* Phone */}
                        <div className={'d-input mb-3 d-flex flex-column align-items-start ' + (err==4?'error':'')}>
                            <input type="tel" class="form-control" id="phone"  onChange={(e)=>SetPhone(e.target.value)} />
                            <label for="phone" class="form-label">Phone</label>
                        </div>
                        {/* Phone end */}
                         {/* password */}
                        <div className={'d-input mb-3 d-flex flex-column align-items-start ' + (err==3?'error':'')}>
                            <input type="text" class="form-control" id="password" onChange={(e)=>SetPassword(e.target.value)}/>
                            <label for="password" class="form-label">Password {Password}</label>
                        </div>
                        {/* password end */}
                        {/* city */}
                        <div className="sign-select">
                            <select class=" form-select" aria-label="Default select example" onChange={(e)=>SetCity(e.target.value)} >
                                <option value="" selected/>
                                <option value='Baghdad' >Baghdad</option>
                                <option value='Baghdad' >rablie</option>
                                <option value='bahera' >bahera</option>
                            </select>
                            <label  class="form-label">city</label>
                        </div>
                        {/* citu end */}
                        <button className="btn  btn-primary btn-lg" onClick={e => handleFormSubmit(e)}> Sign Up</button>
                        <div class="text-center mt-2">
                        <p>you have account? <a href="#!">Sign In </a></p>
                        </div>
                    </div>
                    {/* card body end */}
                </div>
                {/* card end  */}
            </div>
        </div>
    </div>
</section>
    </>
)
}
export default SignUp;