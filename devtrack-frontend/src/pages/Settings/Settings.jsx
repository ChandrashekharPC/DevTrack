import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
    FaUser,
    FaLock,
    FaBell,
    FaPalette,
    FaSave
} from "react-icons/fa";

import {
    getProfile,
    updateProfile,
    changePassword as changePasswordService
} from "../../services/userService";

import "./Settings.css";

function Settings() {

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: ""
    });

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [notifications, setNotifications] = useState({
        email: true,
        reminders: true
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const data = await getProfile();

            setProfile({
                fullName: data.fullName || "",
                email: data.email || "",
                phone: data.phone || ""
            });
        } catch (error) {
            toast.error(error?.response?.data || "Failed to load profile.");
        } finally {
            setLoading(false);
        }
    };

    const handleProfileChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        });
    };

    const saveProfile = async () => {
        try {
            const updated = await updateProfile(profile);

            setProfile({
                fullName: updated.fullName || "",
                email: updated.email || "",
                phone: updated.phone || ""
            });

            toast.success("Profile updated successfully.");
        } catch (error) {
            toast.error(error?.response?.data || "Failed to update profile.");
        }
    };

    const changePassword = async () => {

        if (
            !password.currentPassword ||
            !password.newPassword ||
            !password.confirmPassword
        ) {
            toast.error("Please fill all password fields.");
            return;
        }

        if (password.newPassword.length < 6) {
            toast.error("New password must be at least 6 characters.");
            return;
        }

        if (password.newPassword !== password.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {

            const message = await changePasswordService({
                currentPassword: password.currentPassword,
                newPassword: password.newPassword
            });

            toast.success(
                typeof message === "string"
                    ? message
                    : "Password changed successfully."
            );

            setPassword({
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            });

        } catch (error) {
            toast.error(
                error?.response?.data || "Failed to change password."
            );
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <h2 style={{ padding: "20px" }}>Loading...</h2>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="settings-page">

                <h2 className="settings-title">Settings</h2>

                <div className="settings-card">
                    <h3><FaUser /><span>Profile Information</span></h3>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={profile.fullName}
                        onChange={handleProfileChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={profile.email}
                        onChange={handleProfileChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={profile.phone}
                        onChange={handleProfileChange}
                    />

                    <button
                        className="settings-btn"
                        onClick={saveProfile}
                    >
                        <FaSave />
                        <span>Save Profile</span>
                    </button>
                </div>

                <div className="settings-card">
                    <h3><FaLock /><span>Change Password</span></h3>

                    <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={password.currentPassword}
                        onChange={handlePasswordChange}
                    />

                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={password.newPassword}
                        onChange={handlePasswordChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={password.confirmPassword}
                        onChange={handlePasswordChange}
                    />

                    <button
                        className="settings-btn"
                        onClick={changePassword}
                    >
                        <FaLock />
                        <span>Change Password</span>
                    </button>
                </div>

                <div className="settings-card">
                    <h3><FaPalette /><span>Appearance</span></h3>

                    <div className="setting-row">
                        <span>Theme</span>
                        <button className="coming-btn" disabled>
                            Light Mode (Dark Mode Coming Soon)
                        </button>
                    </div>
                </div>

                <div className="settings-card">
                    <h3><FaBell /><span>Notifications</span></h3>

                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={() =>
                                setNotifications({
                                    ...notifications,
                                    email: !notifications.email
                                })
                            }
                        />
                        Email Notifications
                    </label>

                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={notifications.reminders}
                            onChange={() =>
                                setNotifications({
                                    ...notifications,
                                    reminders: !notifications.reminders
                                })
                            }
                        />
                        Task Reminders
                    </label>
                </div>

                <div className="settings-card">
                    <h3>Application</h3>
                    <p><strong>Project :</strong> DevTrack</p>
                    <p><strong>Version :</strong> 1.0.0</p>
                    <p><strong>Frontend :</strong> React.js</p>
                    <p><strong>Backend :</strong> Spring Boot</p>
                    <p><strong>Database :</strong> MySQL</p>
                </div>

            </div>
        </DashboardLayout>
    );
}

export default Settings;
