import { Link ,NavLink} from "react-router-dom";

const  Header= () => {
    return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                {/* menu icon  */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* menu icon  */}
                {/* menu  */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                         {/* home */}
                        <li class="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
                            }
                            >
                            Home
                        </NavLink>
                        </li>
                        {/* end home  */}
                         {/* home */}
                        <li class="nav-item">
                        <NavLink
                            to="/Contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
                            }
                            >
                            Contact
                        </NavLink>
                        </li>
                        {/* end home  */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default Header;