import React, { Component } from 'react';
import workData from '../../public/work.json';

const WorkItem = props => (
  <div>
    {props.title}
  </div>
);

const Work = () => (
  <div>
    <h2>Work</h2>
    {workData.data.map(item => <WorkItem key={item.title} {...item} />)}
  </div>
);

export default Work;
