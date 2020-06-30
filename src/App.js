import React from 'react';
import './App.css';
import 'react-router-dom'
import 'react-bootstrap'
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import linear from './components/linear/Index';
import binary from './components/binary/Index'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>        
          <Route path="/" exact component={linear}/>         
          <Route path="/linear" exact component={linear}/>         
          <Route path="/binary" exact component={binary}/>         
        </Switch>  
    </Router> 
    </div>
  );
}

export default App;
