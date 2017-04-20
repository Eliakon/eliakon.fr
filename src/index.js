import React from 'react';
import ReactDOM from 'react-dom';
import Work from './Work/';
import ContactLinks from './ContactLinks/';
import Pikachu from './Pikachu/';
import './index.css';

ReactDOM.render(
  <Work />,
  document.getElementById('work')
);

ReactDOM.render(
  <Pikachu />,
  document.getElementById('pokecenter')
);

ReactDOM.render(
  <ContactLinks />,
  document.getElementById('contact')
);
