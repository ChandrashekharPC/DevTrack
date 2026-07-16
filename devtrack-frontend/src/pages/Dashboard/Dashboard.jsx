import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";
import WelcomeBanner from "../../components/WelcomeBanner";
import RecentTasks from "../../components/RecentTasks";
import RecentProjects from "../../components/RecentProjects";

import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/dashboardService";

import {
    FaUsers,
    FaProjectDiagram,
    FaTasks,
    FaCheckCircle
} from "react-icons/fa";

function Dashboard() {

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalProjects: 0,
        totalTasks: 0,
        completedTasks: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboardStats();

            setStats(data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout>

            <WelcomeBanner />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "25px",
                    marginBottom: "30px"
                }}
            >

                <StatCard
                    title="Users"
                    value={stats.totalUsers}
                    color="#2563EB"
                    icon={<FaUsers />}
                />

                <StatCard
                    title="Projects"
                    value={stats.totalProjects}
                    color="#22C55E"
                    icon={<FaProjectDiagram />}
                />

                <StatCard
                    title="Tasks"
                    value={stats.totalTasks}
                    color="#F59E0B"
                    icon={<FaTasks />}
                />

                <StatCard
                    title="Completed"
                    value={stats.completedTasks}
                    color="#EF4444"
                    icon={<FaCheckCircle />}
                />

            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "25px"
                }}
            >

                <RecentTasks />

                <RecentProjects />

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;