import React from 'react';
import GoLinkExternal from 'react-icons/lib/go/link-external';
import MdClose from 'react-icons/lib/md/close';
import './WorkDetails.css';

const screen = (screen, i) => {
  return <div className="screen" key={`screen${i}`} style={{backgroundImage: `url("/images/screens/${screen}")`}} />
};

const detailsContent = ({toHome}, project) => (
  <div className="work-details-content">
    <h2 style={{color: project.color}}>{project.title}</h2>
    <div className="close" onClick={toHome}>
      <MdClose style={{fill: project.color}} />
    </div>
    <div className="screens" style={{backgroundColor: project.color}}>
      <p>
        {project.description}
        {project.links.map((link, i) => (
          <div>
            <GoLinkExternal />
            <a key={`link${i}`} href={link.url} target="blank">
              {link.title}
            </a>
          </div>
        ))}
      </p>
      {project.screens.map(screen)}
    </div>
  </div>
);

const WorkDetails = props => (
  <div className={`work-details ${props.activeProject ? 'visible' : ''}`}>
    {props.activeProject ? detailsContent(props, props.activeProject) : (props.lastActiveProject ? detailsContent(props, props.lastActiveProject) : null)}
  </div>
);

export default WorkDetails;
