import React from 'react';
import "./styles.css"
import Routes from './routes';
import "./global.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import 'font-awesome/css/font-awesome.css'

import Login from './pages/login'
import Main from './pages/main'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Test } from './Test'

const App = () => (
  <div className="App">
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />}
        </Switch>

      </Router>
    </React.Fragment>

  </div >
);


export default App;
