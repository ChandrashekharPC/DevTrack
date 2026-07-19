import api from "../api/axios";

// =========================
// GET ALL USERS
// =========================

export const getUsers = async () => {

    const response = await api.get("/users");

    return response.data;

};

// =========================
// REGISTER USER
// =========================

export const createUser = async (user) => {

    const response = await api.post("/users", user);

    return response.data;

};

// =========================
// GET PROFILE
// =========================

export const getProfile = async () => {

    const response = await api.get("/users/profile");

    return response.data;

};

// =========================
// UPDATE PROFILE
// =========================

export const updateProfile = async (profile) => {

    const response = await api.put("/users/profile", profile);

    return response.data;

};