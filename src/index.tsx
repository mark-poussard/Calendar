import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebAppSettingsStore from './business/WebAppSettingsStore';

WebAppSettingsStore.initMobileMode();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
