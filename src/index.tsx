import React from 'react';
import ReactDOM from 'react-dom/client';
import {GuestList} from './state/GuestList';
import UserSearch from './state/UserSearch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserSearch/>
    <hr/>
    <GuestList />
  </React.StrictMode>
);