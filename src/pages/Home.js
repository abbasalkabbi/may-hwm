import Product from "../components/Product";

const Home = () => {
    return (
    <div className="home  ">
    {/* hero */}
    <div className="hero w-100 h-75 bg-dark-subtle" > 
        <h1 className="fw-bold fs-1 text-capitalize text-center p-4">
            may-hwm
        </h1>
        {/* search */}
        <div className="search">
            <div class="d-search mb-3 d-flex flex-column align-items-start">
                <input type="text" class="form-control" id="input_s" />
                <label for="input_s" class="form-label">Search</label>
            </div>
            
        </div>
        {/* search End */}
        {/* Category */}
        <div className="category">
            <p> Home </p>
            <p> tech </p>
            <p> mobile </p>
            <p> house </p>
        </div>
        {/* Category End  */}
    </div>
    {/* hero End  */}
    {/* show  Product*/}
    <div className="d-flex flex-row  flex-wrap justify-content-evenly">
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    </div>
    {/* show  Product end */}
    </div>)
};

export default Home;