import React, { Component } from 'react';
import workData from '../../public/work.json';
import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import './Work.css';

const WorkItem = props => (
  <div className="work-item">
    <div className="work-thumbnail" style={{backgroundImage: `url("/images/screens/${props.thumbnail}")`}} />
    <div className="overlay" />
    <div className="more">
      <MdNavigateNext />
    </div>
  </div>
);

const Work = () => (
  <div id="work-content">
    <h2>Work</h2>
    <div className="work-items">
      {workData.data.map(item => <WorkItem key={item.title} {...item} />)}
    </div>
  </div>
);

export default Work;
