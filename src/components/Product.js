const Product=()=>{
    return(
    <>
    {/* card */}
    <div class="card m-4" style={{"width":" 18rem"}}>
        {/* image */}
    <img src="https://picsum.photos/500/350" class="card-img-top" alt="..."/>
    {/* end image */}
    {/* body */}
    <div class="card-body">
    <p  className="d-flex"> <p className="text-secondary ">Category : </p> <p> tech</p> </p>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <hr class="" />
    {/* price */}
    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
    <p class="small text-muted">Available:5</p>
    <h5 class="card-title text-end fw-bold">100$</h5>
    </div>
    
    {/* END price  */}
    
    {/* button */}
    <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
            <a href="#!" class="btn btn-dark  fw-bold">Show</a>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Buy now</button>
    </div>
    {/* end button */}
    </div>
    {/* end body */}
    </div>
    {/* end card */}
    </>
    )
}
export default Product;