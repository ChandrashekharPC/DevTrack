import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../services/userService";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            toast.error("Please fill all fields.");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            await createUser({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });

            toast.success("Registration successful!");

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {

            if (error.response?.data) {
                toast.error(error.response.data);
            } else {
                toast.error("Registration failed.");
            }

        } finally {
            setLoading(false);
        }

    };

    return (

        <div className="register-container">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Join DevTrack</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
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