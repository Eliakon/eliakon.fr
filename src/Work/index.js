import React, { Component } from 'react';
import WorkDetails from './WorkDetails';
import workData from './work.json';
import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import MdDesktopWindows from 'react-icons/lib/md/desktop-windows';
import MdPhoneAndroid from 'react-icons/lib/md/phone-android';
import './Work.css';

var lastActiveProject;

const getActiveProject = () => {
  const project = window.location.pathname.split('/')[1];
  return workData.data.find(item => item.name === project);
}

const WorkItem = props => (
  <div className="work-item" onClick={props.toDetails}>
    <div className="work-thumbnail" style={{backgroundImage: `url("/images/screens/${props.thumbnail}")`}} />
    <div className="overlay" />
    <div className="more">
      <MdNavigateNext />
    </div>
    <div className="devices">
      {props.desktop ? <MdDesktopWindows /> : null}
      {props.mobile ? <MdPhoneAndroid /> : null}
    </div>
  </div>
);

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: getActiveProject(),
      lastActiveProject: null
    };

    window.onpopstate = this.updateState;
  }

  toWorkPage = ({ name }) => {
    history.pushState(null, null, name);
    this.updateState();
  };

  updateState = () => {
    lastActiveProject = this.state.activeProject;
    this.setState({
      activeProject: getActiveProject(),
      lastActiveProject: lastActiveProject
    });
  }

  render = () => (
    <div>
      <div id="work-content">
        <h2>Work</h2>
        <div className="work-items">
          {workData.data.map(item =>
            <WorkItem key={item.title} {...item} toDetails={() => this.toWorkPage(item)} />
          )}
        </div>
      </div>
      <WorkDetails {...this.state} />
    </div>
  )
};

export default Work;
