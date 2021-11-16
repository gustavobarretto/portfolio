import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import SimpleReactLightbox from 'simple-react-lightbox-pro'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

