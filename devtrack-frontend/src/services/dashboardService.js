import api from "../api/axios";

export const getDashboardStats = async () => {

    const response = await api.get("/dashboard/stats");

    return response.data;

};

export const getTasksPerProject = async () => {

    const response = await api.get("/dashboard/tasks-per-project");

    return response.data;

};