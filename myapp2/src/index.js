import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cone from './Cone';
import Cones from './Cones'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cone></Cone>
    <Cones></Cones>
  </React.StrictMode>
);


