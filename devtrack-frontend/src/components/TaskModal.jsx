import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    createTask,
    updateTask
} from "../services/taskService";
import { getProjects } from "../services/projectService";
import { getUsers } from "../services/userService";

import "./TaskModal.css";

function TaskModal({
    onClose,
    onTaskAdded,
    editTask = null
}) {

    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);

    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "OPEN",
        priority: "MEDIUM",
        dueDate: "",
        project: {
            id: ""
        },
        assignedUser: {
            id: ""
        }
    });

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {

        if (editTask) {

            setTask({
                title: editTask.title || "",
                description: editTask.description || "",
                status: editTask.status || "OPEN",
                priority: editTask.priority || "MEDIUM",
                dueDate: editTask.dueDate || "",
                project: {
                    id: editTask.project?.id || ""
                },
                assignedUser: {
                    id: editTask.assignedUser?.id || ""
                }
            });

        }

    }, [editTask]);

    const loadData = async () => {

        try {

            const projectData = await getProjects();
            const userData = await getUsers();

            setProjects(projectData);
            setUsers(userData);

        } catch (error) {

            console.error(error);
            toast.error("Unable to load projects and users");

        }

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "projectId") {

            setTask(prev => ({
                ...prev,
                project: {
                    id: value
                }
            }));

        }

        else if (name === "assignedUserId") {

            setTask(prev => ({
                ...prev,
                assignedUser: {
                    id: value
                }
            }));

        }

        else {

            setTask(prev => ({
                ...prev,
                [name]: value
            }));

        }

    };

    const handleSave = async () => {

        try {

            if (!task.title.trim()) {
                toast.warning("Task title is required");
                return;
            }

            if (!task.project.id) {
                toast.warning("Please select a project");
                return;
            }

            if (!task.assignedUser.id) {
                toast.warning("Please assign a user");
                return;
            }

            if (editTask) {

                await updateTask(editTask.id, task);

                toast.success("Task updated successfully");

            } else {

                await createTask(task);

                toast.success("Task created successfully");

            }

            await onTaskAdded();

            onClose();

        } catch (error) {

            console.error(error);

            toast.error(
                editTask
                    ? "Unable to update task"
                    : "Unable to create task"
            );

        }

    };

    return (

        <div
            className="project-modal-overlay"
            onClick={onClose}
        >

            <div
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <h2>
                    {editTask ? "Edit Task" : "Create Task"}
                </h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={task.title}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                />

                <select
                    name="projectId"
                    value={task.project.id}
                    onChange={handleChange}
                >
                    <option value="">Select Project</option>

                    {projects.map(project => (

                        <option
                            key={project.id}
                            value={project.id}
                        >
                            {project.projectName}
                        </option>

                    ))}

                </select>

                <select
                    name="assignedUserId"
                    value={task.assignedUser.id}
                    onChange={handleChange}
                >
                    <option value="">Assign User</option>

                    {users.map(user => (

                        <option
                            key={user.id}
                            value={user.id}
                        >
                            {user.fullName}
                        </option>

                    ))}

                </select>

                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                >
                    <option value="OPEN">OPEN</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>

                <select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                >
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                />

                <div className="project-modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        onClick={handleSave}
                    >
                        {editTask ? "Update Task" : "Save Task"}
                    </button>

                </div>

            </div>

        </div>

    );

}

export default TaskModal;