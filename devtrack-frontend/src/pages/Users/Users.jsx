import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getUsers } from "../../services/userService";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error(error);
            alert("Unable to load users.");
        }
    };

    return (
        <DashboardLayout>

            <h2>Users</h2>

            <table className="table table-bordered mt-4">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>{user.fullName}</td>

                            <td>{user.email}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </DashboardLayout>
    );
}

export default Users;