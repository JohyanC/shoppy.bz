import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';
//Microsoft QAuth
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));

const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    
  <MsalProvider instance={msalInstance}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </MsalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
