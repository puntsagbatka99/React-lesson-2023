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

const drawerWidth = 240;

export default function NewUsers() {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: "space-between", paddingLeft: "289px", paddingRight: "50px" }}>
                <Button style={{backgroundColor:"#746ab0"}} variant="contained">NEW</Button>
                <Button style={{backgroundColor:"#746ab0"}} variant="contained">ADD FILTER</Button>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Header />
                </AppBar>
                <Aside />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <form style={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            placeholder="First Name"
                            type="text" />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Last Name"
                            type="text" />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            placeholder="Phone Number"
                            type="number" />

                        <TextField
                            style={{ marginTop: "30px" }}
                            id="outlined-basic"
                            label="E-Mail"
                            variant="outlined"
                            placeholder="E-Mail"
                            type="email" />
                        <FormControl style={{ margin: "40px 0" }}>
                            <FormLabel style={{ display: 'flex', justifyContent: "start" }}>Role</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="female" control={<Radio />} label="Admin" />
                                <FormControlLabel value="male" control={<Radio />} label="User" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl style={{ marginBottom: "40px" }}>
                            <FormLabel style={{ display: 'flex', justifyContent: "start" }}>Disabled</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="female" control={<Radio />} label="" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            style={{ marginBottom: "30px" }}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            placeholder="Password"
                            type="password" />
                        <div style={{display:"flex", justifyContent:"start"}}>
                            <Button style={{marginRight:"20px", backgroundColor:"#746ab0"}} variant="contained">SAVE</Button>
                            <Button style={{marginRight:"20px", color:"#746ab0", border:"1px solid #746ab0"}} variant="outlined">EDIT</Button>
                            <Button style={{marginRight:"20px", color:"#746ab0", border:"1px solid #746ab0"}} variant="outlined">CANCEL</Button>
                        </div>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
