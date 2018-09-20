import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Header from './components/Header';

import Client from 'shopify-buy';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactGA from 'react-ga';


import '../../shared/app.css';

const client = Client.buildClient({
  storefrontAccessToken: 'd3e6e912a34236e09ea1c99d60a59554',
  domain: 'freelilpump.myshopify.com'
});


ReactGA.initialize('UA-68701293-5');
ReactGA.pageview(window.location.pathname + window.location.search);




ReactDOM.render(

  <Router >

    <Switch>
      <Route exact path="/"
        component={() => <App client={client} />}
      />
      <Route path="/"
        component={() => <About />}
      />

    </Switch>

  </Router>
  ,
  document.getElementById('root')
);
