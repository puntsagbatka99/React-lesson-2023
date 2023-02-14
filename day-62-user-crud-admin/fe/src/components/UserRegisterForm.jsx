import {Grid, Button,InputLabel, Select, MenuItem} from "@mui/material"
import TextField from "@mui/material/TextField"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UserRegisterForm() {
    const URL = "http://localhost:8080/register"
    const ROLE_URL = "http://localhost:8080/users/roles"
    const [ roles, setRoles ] = useState([]);
    const [ currentRole, setCurrentRole ] = useState(0);

    useEffect(()=>{
        fetchRoles()
    }, [])

    async function fetchRoles(){
        const FETCHED_DATA = await fetch(ROLE_URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);
        setRoles(FETCHED_JSON.data)
    }

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            role: currentRole
        }

        const options ={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);
        if(FETCHED_JSON){
            navigate("/users")
        }
    }

    function handleSelectChange(e) {
        console.log(e.target.value)
        setCurrentRole(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <TextField
                            id="firstname"
                            name="firstname"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="First Name" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            id="lastname"
                            name="lastname"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="Last Name" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="E-Mail" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="Password" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            id="address"
                            name="address"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="Address" />
                    </Grid>
                    <Grid xs={12}>
                        <InputLabel>User Roles</InputLabel>
                        <Select
                            id="role-selector"
                            value={currentRole}
                            label="Roles"
                            onChange={handleSelectChange}>
                            {
                                roles && roles.map((role, index) => {
                                    return(
                                        <MenuItem key={index} value={role.id}>{role.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </Grid>
                    <Grid xs={12}>
                        <Button variant="outlined" type="submit">Submit</Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}