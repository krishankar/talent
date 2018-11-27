import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import dashboard from './container/dashboard';
import login from './container/login';
import register from './container/register';

class App extends Component {
  render() {
    return (
      <Router>			
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Dashboard" component={dashboard}/>
						<Route exact path="/Login" component={login} />		
						<Route exact path="/register" component={register} />		
					</Switch>				
			</Router>     
    );
  }
}

export default App;
