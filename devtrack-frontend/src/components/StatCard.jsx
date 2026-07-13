import "./StatCard.css";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div>
          <h5>{title}</h5>
          <h2>{value}</h2>
        </div>

        <div
          className="icon-circle"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;