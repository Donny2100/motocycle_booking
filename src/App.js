import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Layout
import Layout from './Layout';

// Pages
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import NoMatchPage from "./Pages/NoMatchPage";

// History
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route component={NoMatchPage} />
        </Switch>
      </Layout>     
    </Router>     
  );
}

export default App;
