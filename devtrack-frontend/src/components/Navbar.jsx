import "./Navbar.css";

import {
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

function Navbar(){

    return(

        <div className="navbar">

            <div className="search-box">

                <FaSearch/>

                <input
                    type="text"
                    placeholder="Search..."
                />

            </div>

            <div className="navbar-right">

                <FaBell className="nav-icon"/>

                <FaUserCircle className="profile-icon"/>

                <span>Chandrashekhar</span>

            </div>

        </div>

    );

}

export default Navbar;