import * as React from 'react';
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header"
import Aside from '../components/Aside';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useEffect } from 'react';

const drawerWidth = 240;

export default function NewUsers() {
    const [users, setUsers] = useState([]);
    const URL = "http://localhost:8080/users/new-users"
    const newUser = {
        id: "",
        username: "",
        age: ""
    }

    async function postData(data) {
        console.log(data)
        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // }
        // const FETCHED_DATA = await fetch(URL, options);
        // const FETCHED_JSON = await FETCHED_DATA.json();
        // setUsers(FETCHED_JSON)
        // console.log(FETCHED_DATA)
    }

    useEffect(() => {
        postData()
    }, [])
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.firstname.value)
        // const newUser = {
        //     id: Date.now().toString(),
        //     username: e.target.firstname.value,
        //     age: e.target.phonenumber.value
        // };
        // postData(newUser)
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: "space-between", paddingLeft: "289px", paddingRight: "50px" }}>
                <Button style={{ backgroundColor: "#746ab0" }} variant="contained">NEW</Button>
                <Button style={{ backgroundColor: "#746ab0" }} variant="contained">ADD FILTER</Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Header />
                </AppBar>
                <Aside />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            placeholder="First Name"
                            type="text"
                            name='firstname' />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Last Name"
                            type="text"
                            name='lastname' />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            placeholder="Phone Number"
                            type="number"
                            name='phonenumber' />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="E-Mail"
                            variant="outlined"
                            placeholder="E-Mail"
                            type="email"
                            name='email' />

                        <TextField
                            style={{ marginBottom: "30px" }}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            placeholder="Password"
                            type="password"
                            name='password' />

                        <Button style={{ marginRight: "20px", backgroundColor: "#746ab0" }} variant="contained">SAVE</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
