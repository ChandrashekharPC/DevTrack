import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

import { getTasksPerProject } from "../services/dashboardService";

function DashboardBarChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadChart();
    }, []);

    const loadChart = async () => {

        try {

            const response = await getTasksPerProject();

            setData(response);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div
            style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
            }}
        >

            <h3 style={{ marginBottom: "20px" }}>
                Tasks Per Project
            </h3>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="projectName" />

                    <YAxis allowDecimals={false} />

                    <Tooltip />

                    <Bar
                        dataKey="taskCount"
                        fill="#2563EB"
                        radius={[6, 6, 0, 0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default DashboardBarChart;