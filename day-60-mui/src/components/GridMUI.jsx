import  {Grid}  from "@mui/material"
const GridMUI = () => {
    return(
        <div>
            <h1>DAY-60 MUI GridBox CustomTheme</h1>
            <main>
                <Grid container spacing={2}>
                    <Grid>First Column</Grid>
                    <Grid>Second Column</Grid>
                </Grid>
            </main>
        </div>
    )
}

export default GridMUI 