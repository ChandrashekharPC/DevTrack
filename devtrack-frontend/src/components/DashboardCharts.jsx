import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

function DashboardCharts({ stats }) {

    const data = [
        {
            name: "Completed",
            value: stats.completedTasks
        },
        {
            name: "Pending",
            value: stats.totalTasks - stats.completedTasks
        }
    ];

    const COLORS = ["#10B981", "#F59E0B"];

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
                Task Status
            </h3>

            <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                        label
                    >

                        {data.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default DashboardCharts;