import { useEffect } from "react"
import { useState } from "react"
import {Grid, Button} from "@mui/material"

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
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user,index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.role.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}