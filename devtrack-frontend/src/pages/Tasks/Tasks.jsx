import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

import { getTasks, deleteTask } from "../../services/taskService";

import "./Tasks.css";

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {

        try {

            const data = await getTasks();

            setTasks(data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this task?")) return;

        try {

            await deleteTask(id);

            loadTasks();

        } catch (error) {

            console.error(error);

            alert("Unable to delete task");

        }

    };

    const filteredTasks = tasks.filter(task =>
        task.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="tasks-page">

                <div className="tasks-header">

                    <h2>Tasks</h2>

                    <button className="add-btn">
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
                                <strong>Project :</strong>{" "}
                                {task.project?.projectName}
                            </p>

                            <p>
                                <strong>Assigned :</strong>{" "}
                                {task.assignedUser?.fullName}
                            </p>

                            <p>
                                <strong>Status :</strong>{" "}
                                {task.status}
                            </p>

                            <p>
                                <strong>Priority :</strong>{" "}
                                {task.priority}
                            </p>

                            <p>
                                <strong>Due :</strong>{" "}
                                {task.dueDate}
                            </p>

                            <div className="task-buttons">

                                <button className="edit-btn">
                                    <FaEdit />
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Tasks;