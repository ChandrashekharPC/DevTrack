import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        // Remove JWT Token
        localStorage.removeItem("token");

        // Redirect to Login
        navigate("/");

    };

    return (

        <div
            style={{
                height: "60px",
                background: "#1976d2",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 25px"
            }}
        >

            <h2>DevTrack</h2>

            <button
                onClick={handleLogout}
                style={{
                    padding: "8px 18px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>

        </div>

    );

}

export default Navbar;