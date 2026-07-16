import axios from "../api/axios";

export const getTasks = async () => {
    const response = await axios.get("/tasks");
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post("/tasks", task);
    return response.data;
};

export const updateTask = async (id, task) => {
    const response = await axios.put(`/tasks/${id}`, task);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
};