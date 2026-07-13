function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#1976d2",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
      }}
    >
      <h2>DevTrack</h2>

      <button
        style={{
          padding: "8px 15px",
          border: "none",
          background: "white",
          color: "#1976d2",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;