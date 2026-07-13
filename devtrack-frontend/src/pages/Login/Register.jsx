import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    return (
        <div className="register-container">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Join DevTrack</p>

                <form>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button>
                        Register
                    </button>

                </form>

                <div className="register-footer">

                    Already have an account?

                    <Link to="/">
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;