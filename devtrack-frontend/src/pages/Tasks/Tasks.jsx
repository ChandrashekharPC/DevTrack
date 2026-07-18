import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

import { getTasks, deleteTask } from "../../services/taskService";
import TaskModal from "../../components/TaskModal";

import "./Tasks.css";

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editTask, setEditTask] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {

        try {

            const data = await getTasks();

            setTasks(data);

        } catch (error) {

            console.error(error);

            toast.error("Unable to load tasks");

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this task?")) return;

        try {

            await deleteTask(id);

            toast.success("Task deleted successfully");

            loadTasks();

        } catch (error) {

            console.error(error);

            toast.error("Unable to delete task");

        }

    };

    const openAddModal = () => {

        setEditTask(null);
        setShowModal(true);

    };

    const openEditModal = (task) => {

        setEditTask(task);
        setShowModal(true);

    };

    const closeModal = () => {

        setShowModal(false);
        setEditTask(null);

    };

    const filteredTasks = tasks.filter(task =>
        task.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="tasks-page">

                <div className="tasks-header">

                    <h2>Tasks</h2>

                    <button
                        className="add-btn"
                        onClick={openAddModal}
                    >
                        <FaPlus />
                        <span>Add Task</span>
                    </button>

                </div>

                <div className="search-task">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search Task..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="task-grid">

                    {filteredTasks.map(task => (

                        <div
                            className="task-card"
                            key={task.id}
                        >

                            <h3>{task.title}</h3>

                            <p>
                                <strong>Description :</strong><br />
                                {task.description}
                            </p>

                            <p>
                                <strong>Project :</strong>{" "}
                                {task.project?.projectName}
                            </p>

                            <p>
                                <strong>Assigned :</strong>{" "}
                                {task.assignedUser?.fullName}
                            </p>

                            <p>
                                <strong>Status :</strong>{" "}
                                <span
                                    className={`status-badge ${
                                        task.status === "OPEN"
                                            ? "status-open"
                                            : task.status === "IN_PROGRESS"
                                            ? "status-progress"
                                            : "status-completed"
                                    }`}
                                >
                                    {task.status.replace("_", " ")}
                                </span>
                            </p>

                            <p>
                                <strong>Priority :</strong>{" "}
                                <span
                                    className={`priority-badge ${
                                        task.priority === "HIGH"
                                            ? "priority-high"
                                            : task.priority === "MEDIUM"
                                            ? "priority-medium"
                                            : "priority-low"
                                    }`}
                                >
                                    {task.priority}
                                </span>
                            </p>

                            <p>
                                <strong>Due Date :</strong>{" "}
                                {task.dueDate}
                            </p>

                            <div className="task-buttons">

                                <button
                                    className="edit-btn"
                                    onClick={() => openEditModal(task)}
                                    title="Edit Task"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(task.id)}
                                    title="Delete Task"
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {showModal && (

                <TaskModal
                    editTask={editTask}
                    onClose={closeModal}
                    onTaskAdded={loadTasks}
                />

            )}

        </DashboardLayout>

    );

}

export default Tasks;