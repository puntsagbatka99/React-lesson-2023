import { useEffect } from "react"
import { useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([])
    const URL = "http://localhost:8080/users"
    async function fetchUsers() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON)
        setUsers(FETCHED_JSON.data)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h1>USERS LIST</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>LAst Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map(user => {
                            return (
                                <tr>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}