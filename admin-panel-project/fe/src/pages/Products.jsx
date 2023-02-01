import ProductsTable from "../components/ProductsTable"
import * as React from 'react';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header"
import Aside from '../components/Aside';

const drawerWidth = 240;

export default function Products() {
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
                    <ProductsTable />
                </Box>
            </Box>
        </Box>
    );
}
