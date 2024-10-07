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
                {/* search icon  */}
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </button>
                {/* search icon  */}
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