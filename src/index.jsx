import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {ProviderTheme} from './Context/Theme'


ReactDOM.render(
  <React.StrictMode>
    <ProviderTheme>
    <App />
    </ProviderTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
