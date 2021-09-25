import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { AppBar, Grid } from '@mui/material';
import { sideBarText } from "../constants/Sidebar";

const Sidebar = () => {
    let { path } = useRouteMatch();
    return (
        <AppBar position={"static"} className="sidebar" >
            <Grid>
                <Grid className="grid">
                    <Link className="link" to={`${path}`} >{sideBarText.company}</Link>
                </Grid>
                <Grid className="grid">
                    <Link className="link" to={`${path}/jobs`}>{sideBarText.jobs}</Link>
                </Grid>
                <Grid className="grid">
                    <Link className="link" to={`${path}/editJobs`}>{sideBarText.editJobs}</Link>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Sidebar
