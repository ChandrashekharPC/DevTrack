import { useState } from "react";
import { createProject } from "../services/projectService";
import "./ProjectModal.css";

function ProjectModal({ onClose, onProjectAdded }) {

    const [project, setProject] = useState({
        projectName: "",
        projectKey: "",
        description: ""
    });

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {

        if (
            project.projectName.trim() === "" ||
            project.projectKey.trim() === ""
        ) {
            alert("Project Name and Project Key are required.");
            return;
        }

        try {

            await createProject(project);

            alert("Project Created Successfully");

            if (onProjectAdded) {
                await onProjectAdded();
            }

            onClose();

        } catch (error) {

            console.error("Create Project Error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
            }

            alert("Unable to create project");
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
                <h2>Create Project</h2>

                <input
                    type="text"
                    name="projectName"
                    placeholder="Project Name"
                    value={project.projectName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="projectKey"
                    placeholder="Project Key (Example: DEV)"
                    value={project.projectKey}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={project.description}
                    onChange={handleChange}
                />

                <div className="project-modal-buttons">

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="save-btn"
                        onClick={handleSave}
                    >
                        Save Project
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProjectModal;