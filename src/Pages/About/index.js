import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Company from './Containers/Company';
import EditJobs from './Containers/EditJobs';
import Jobs from './Containers/Jobs';

const About = ({ isAuthenticated }) => {
    let { path } = useRouteMatch();

    return (
        <div className="d-flex flex-row">
            <Sidebar isAuthenticated={isAuthenticated} />
            <div className="app-content" >
                <Switch>
                    <Route path={path} exact render={() => <Company />} />
                    <Route path={`${path}/editJobs`}>
                        <EditJobs isAuthenticated={isAuthenticated} />
                    </Route>
                    <Route path={`${path}/jobs`} >
                        <Jobs />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default About
