import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './state';
import App from './App';
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <ContextProvider>
         <App />
      </ContextProvider>
   </BrowserRouter>
);

