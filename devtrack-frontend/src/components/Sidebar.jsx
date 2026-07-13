import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#2c3e50",
        color: "white",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Menu</h2>

      <ul style={{ listStyle: "none", padding: "20px" }}>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/users"
            style={{ color: "white", textDecoration: "none" }}
          >
            Users
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/tasks"
            style={{ color: "white", textDecoration: "none" }}
          >
            Tasks
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;