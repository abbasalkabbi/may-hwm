const SignIn= ()=>{
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
                        <h3 class="mb-5  fw-bolder">Sign In</h3>
                        {/* email */}
                        <div class="d-input mb-3 d-flex flex-column align-items-start">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                        </div>
                        {/* email end */}
                         {/* password */}
                        <div class="d-input mb-3 d-flex flex-column align-items-start">
                            <input type="text" class="form-control" id="password" />
                            <label for="password" class="form-label">Password</label>
                        </div>
                        {/* password end */}
                        <button className="btn  btn-primary btn-lg"> Sign In</button>
                        <div class="text-center mt-2">
                        <p>you Dont have account? <a href="#!">Sign Up </a></p>
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
export default SignIn;