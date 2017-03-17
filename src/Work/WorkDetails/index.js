import React from 'react';
import './WorkDetails.css';

const detailsContent = project => (
  <div className="work-details-content">
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <div className="screen" style={{backgroundImage: `url("/images/screens/${project.screens[0]}")`}} />
  </div>
);

const WorkDetails = props => (
  <div className={`work-details ${props.activeProject ? 'visible' : ''}`}>
    {props.activeProject ? detailsContent(props.activeProject) : (props.lastActiveProject ? detailsContent(props.lastActiveProject) : null)}
  </div>
);

export default WorkDetails;
