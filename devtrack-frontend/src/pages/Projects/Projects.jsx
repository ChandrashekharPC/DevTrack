import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaPlus, FaSearch } from "react-icons/fa";

import { getProjects } from "../../services/projectService";
import ProjectModal from "../../components/ProjectModal";

import "./Projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {

            const data = await getProjects();

            setProjects(data);

        } catch (error) {

            console.error(error);

        }
    };

    const filteredProjects = projects.filter(project =>
        project.projectName
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="projects-page">

                <div className="projects-header">

                    <h2>Projects</h2>

                    <button
                        className="add-btn"
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlus />
                        <span>Add Project</span>
                    </button>

                </div>

                <div className="search-project">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search Project..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="project-grid">

                    {filteredProjects.map(project => (

                        <div
                            className="project-card"
                            key={project.id}
                        >

                            <h3>{project.projectName}</h3>

                            <p>
                                <strong>Project Key:</strong> {project.projectKey}
                            </p>

                            <p>{project.description}</p>

                        </div>

                    ))}

                </div>

            </div>

            {showModal && (

                <ProjectModal
                    onClose={() => setShowModal(false)}
                    onProjectAdded={loadProjects}
                />

            )}

        </DashboardLayout>

    );

}

export default Projects;