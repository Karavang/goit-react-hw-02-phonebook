import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from 'components/App';
import nanoid from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>
);
