const Product=()=>{
    return(
    <>
    {/* card */}
    <div class="card" style={{"width":" 18rem"}}>
        {/* image */}
    <img src="https://random.imagecdn.app/500/350" class="card-img-top" alt="..."/>
    {/* end image */}
    {/* body */}
    <div class="card-body">
    <p class="card-title">Category :tech </p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* price */}
    <h5 class="card-title text-end">100$</h5>
    {/* END price  */}
    {/* button */}
    <div class=" d-flex justify-content-around" >
    <button type="button" class="btn btn-outline-success">SHOW</button>
    <button type="button" class="btn btn-outline-primary">add to card</button>
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