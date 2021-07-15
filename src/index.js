import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Helmet} from "react-helmet";
import {image} from "./components/images/favicon.ico"

const app = (
  <BrowserRouter>
      <App />
      <Helmet>
                <meta charSet="utf-8" />
                <title>IkennaIfek</title>
                <link rel="icon" href={image} />
            </Helmet>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();


