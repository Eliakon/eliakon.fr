import React from 'react';
import GoLinkExternal from 'react-icons/lib/go/link-external';
import './WorkDetails.css';

const getScreens = (project, type) => {
  if (type && project.type) {
    return project.type;
  }

  if (project.mobile) {
    return project.mobile;
  }

  if (project.desktop) {
    return project.desktop;
  }

  return [];
}

const screen = (screen, i) => {
  return <div className="screen" key={`screen${i}`} style={{backgroundImage: `url("/images/screens/${screen}")`}} />
};

const detailsContent = project => (
  <div className="work-details-content">
    <h2 style={{color: project.color}}>{project.title}</h2>
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
      {getScreens(project).map(screen)}
    </div>
  </div>
);

const WorkDetails = props => (
  <div className={`work-details ${props.activeProject ? 'visible' : ''}`}>
    {props.activeProject ? detailsContent(props.activeProject) : (props.lastActiveProject ? detailsContent(props.lastActiveProject) : null)}
  </div>
);

export default WorkDetails;
