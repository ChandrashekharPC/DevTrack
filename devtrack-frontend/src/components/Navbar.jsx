import { useNavigate } from "react-router-dom";
import { FaBell, FaSearch, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

function Navbar(){

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

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

                <span className="user-name">
                    Chandrashekhar
                </span>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    <FaSignOutAlt/>
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;