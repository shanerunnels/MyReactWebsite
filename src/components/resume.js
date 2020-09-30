import React, { Component } from 'react';
import ResumePDF from './Resume.pdf';

class Resume extends Component {
    render() {
        return(
            <a href={ResumePDF} target='_blank'>
                <h3 className='oswald-resume text-align-start'>
                    View Resume
                </h3>
            </a>
        )
    }
}

export default Resume;