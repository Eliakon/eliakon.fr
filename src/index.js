import React from 'react';
import ReactDOM from 'react-dom';
import Work from './Work/';
import ContactLinks from './ContactLinks/';
import './index.css';

ReactDOM.render(
  <Work />,
  document.getElementById('work')
);

ReactDOM.render(
  <ContactLinks />,
  document.getElementById('contact')
);
