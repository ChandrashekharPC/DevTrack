import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";

import WelcomeBanner from "../../components/WelcomeBanner";

import {
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaCheckCircle
} from "react-icons/fa";

function Dashboard() {

  return (

    <DashboardLayout>

      <WelcomeBanner />

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"25px"
        }}
      >

        <StatCard
          title="Users"
          value="12"
          color="#2563EB"
          icon={<FaUsers />}
        />

        <StatCard
          title="Projects"
          value="6"
          color="#22C55E"
          icon={<FaProjectDiagram />}
        />

        <StatCard
          title="Tasks"
          value="48"
          color="#F59E0B"
          icon={<FaTasks />}
        />

        <StatCard
          title="Completed"
          value="32"
          color="#EF4444"
          icon={<FaCheckCircle />}
        />

      </div>

    </DashboardLayout>

  );

}

export default Dashboard;