import {Grid, Button} from "@mui/material"
import TextField from "@mui/material/TextField"
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm(){
    const URL = "http://localhost:8080/login"

    async function handleSubmit(e){
        e.preventDefault();

        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);

        if(FETCHED_JSON.status === "success"){
            toast("You approved to login")
            Navigate("/users")
        } else {
            toast("Username or Password do not match")
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            variant="filled"
                            size="small"
                            defaultValue=""
                            label="Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" type="submit">Log-In</Button>
                    </Grid>
                </Grid>

            </form>
            
        </div>
    )
}