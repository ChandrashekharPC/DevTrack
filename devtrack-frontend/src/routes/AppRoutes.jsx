import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";

import Register from "../pages/Login/Register";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />


                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/users" element={<Users />} />

                <Route path="/projects" element={<Projects />} />

                <Route path="/tasks" element={<Tasks />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;