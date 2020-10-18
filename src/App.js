import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes"

function App() {
  return (
    <>
    <Router>
      <Switch>
        
          <Routes/>
        
      </Switch>
    </Router>
  </>
  );
}

export default App;
