import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Grid } from "@mui/material";
import { navbarText } from '../constants/Navbar';

const Navbar = () => {
    return (
        <>
            <AppBar position="static" className="navbar">
                <Grid container spacing={2} >
                    <Grid item xs={1}>
                        <Link className="link" to="/">{navbarText.home}</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link className="link" to="/signin">{navbarText.signIn}</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link className="link" to="/about">{navbarText.about}</Link>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    )
}

export default Navbar