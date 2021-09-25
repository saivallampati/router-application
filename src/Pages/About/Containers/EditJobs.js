import React from 'react'
import { Redirect } from 'react-router-dom';
import { editJobs } from '../../../constants/EditJobs';

const EditJobs = ({ isAuthenticated }) => {
    return isAuthenticated ? <div>{editJobs.content}</div> : <Redirect
        to={{
            pathname: "/signin",
        }}
    />;

}

export default EditJobs
