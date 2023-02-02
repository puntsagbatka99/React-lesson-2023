import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header"
import Aside from '../components/Aside';
import { useState } from 'react';
import { useEffect } from 'react';

const drawerWidth = 240;

export default function NewUsers() {
    const URL = "http://localhost:8080/users/new-users"

    async function createNewUser(data){
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const FETCHED_DATA = await fetch( URL, options );
        const FETCHED_JSON = await FETCHED_DATA.json();
    }

    useEffect(() => {
        createNewUser()
      }, [])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.firstname.value)
        const newUser = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            number: e.target.phonenumber.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        createNewUser(newUser)
    }
    return (
        <Box>
            <h1 style={{marginBottom:"0"}}>New Users</h1>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Header />
                </AppBar>
                <Aside />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <input type="text" name="firstname" placeholder='First Name' style={{height:"50px", border:"1px solid gray", borderRadius:"5px", marginBottom:"30px"}} />
                        <input type="text" name="lastname" placeholder='Last Name' style={{height:"50px", border:"1px solid gray", borderRadius:"5px", marginBottom:"30px"}} />
                        <input type="number" name="phonenumber" placeholder='Phone Number' style={{height:"50px", border:"1px solid gray", borderRadius:"5px", marginBottom:"30px"}} />
                        <input type="email" name="email" placeholder='E-Mail' style={{height:"50px", border:"1px solid gray", borderRadius:"5px", marginBottom:"30px"}} />
                        <input type="password" name="password" placeholder='Password' style={{height:"50px", border:"1px solid gray", borderRadius:"5px", marginBottom:"30px"}} />
                        <button style={{height:"40px", width:"100px", backgroundColor:"#746ab0", color:"white", border:"1px solid #746ab0", borderRadius:"5px"}}>SAVE</button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
