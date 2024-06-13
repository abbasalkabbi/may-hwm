const SignUp= ()=>{
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
                        <h3 class="mb-5">Sign in</h3>
                        {/* Full Name */}
                        <div class="mb-3 d-flex flex-column align-items-start">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        {/* Full Name end */}
                        {/* email */}
                        <div class="mb-3 d-flex flex-column align-items-start">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        {/* email end */}
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