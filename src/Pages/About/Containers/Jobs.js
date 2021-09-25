import React from 'react';
import { jobs } from "../../../constants/Jobs";
function Jobs() {
    return (
        <div>
            {jobs.content}
        </div>
    )
}

Jobs.propTypes = {

}

export default Jobs

