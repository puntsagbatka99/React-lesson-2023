import { Card, CardContent, Grid, Button, TextField } from "@mui/material"
import { useState } from "react";
export default function TimerForm({id, title, project,onFormSubmit,onFormClose}) {
    const submitText = id ? "Update" : "Create";
    const [ timer, setTimer ] = useState({
        title: title || "", 
        project: project || "",
    });

    function handleTitleChange(e){
        setTimer({
            ...timer, title: e.target.value,
        })
    }
    function handleProjectChange(e){
        setTimer({
            ...timer, project: e.target.value,
        })
    }
    return (
        <div>
            <h1>Timer Form</h1>
            <Grid>
                <Card sx={{ maxWidth: "345px", margin: "0 auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12} variant={"outlined"}>
                                    <TextField type="text" placeholder={timer.title} label={"Title"} fullWidth={true} value={timer.title} onChange={handleTitleChange}/>
                                </Grid>
                                <Grid item xs={12} variant={"outlined"}>
                                    <TextField type="text" placeholder={timer.project} label={"Project"} fullWidth={true} value={timer.project} onChange={handleProjectChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color={"success"} variant={"outlined"} onClick={onFormSubmit}>{submitText}</Button>
                                    <Button color={"success"} variant={"outlined"} onClick={onFormClose}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}