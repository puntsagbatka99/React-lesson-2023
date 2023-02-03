import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


export default function UsersTable() {
    const URL = "http://localhost:8080/users"
    const [user, setUser] = useState([])

    async function fetchedData() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setUser(FETCHED_JSON.data)
    }

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 190 },
        { field: 'lastName', headerName: 'Last name', width: 190 },
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            type: 'number',
            width: 130,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 200,
        },
        { field: 'role', headerName: 'Role', width: 70 },
        { field: 'disabled', headerName: 'Disabled', width: 90 },
        { field: 'avatar', headerName: 'Avatar', width: 90 },
        { field: 'actions', headerName: 'Actions', width: 90 },
    ];

    const rows = [
        // { 
        //     user && user.map((user, index) => {
        //     return (
        //         {
        //             firstName: user.firstname,
        //             lastName: user.lastname,
        //             phoneNumber: user.number,
        //             email: user.email,
        //             role: "user",
        //             disabled: "No",
        //             avatar: "...",
        //             actions: "..."
        //         }
        //     )
        // })
        // }
    ];
return (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
);
}
