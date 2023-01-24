import { Card, CardContent, Grid, Button, TextField } from "@mui/material"
export default function TimerForm({title, project}) {
    return (
        <div>
            <h1>Timer Form</h1>
            <Grid>
                <Card sx={{ maxWidth: "345px", margin: "0 auto" }}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12} variant={"outlined"}>
                                    <TextField type="text" placeholder={title} label={title} fullWidth={true}  />
                                </Grid>
                                <Grid item xs={12} variant={"outlined"}>
                                    <TextField type="text" placeholder={project} label={project} fullWidth={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color={"success"} variant={"outlined"}>Create</Button>
                                    <Button color={"success"} variant={"outlined"}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}