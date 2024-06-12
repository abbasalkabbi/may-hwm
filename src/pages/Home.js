import Product from "../components/Product";

const Home = () => {
    return (
    <div className="home  ">
    {/* hero */}
    <div className="hero w-100 h-75 bg-dark-subtle" > 
        <h1 className="fw-bold fs-1 text-capitalize text-center p-4">
            may-hwm
        </h1>
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