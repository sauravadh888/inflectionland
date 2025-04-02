// src/App.jsx
import React from 'react';
import { Switch, Route } from 'wouter';
import './views/global.css';  // Ensure this line is here!

import HomePage from './views/HomePage';
import Athletes from './pages/Athletes';
import Agents from './pages/Agents';
import Colleges from './pages/Colleges';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/athletes" component={Athletes} />
      <Route path="/agents" component={Agents} />
      <Route path="/colleges" component={Colleges} />
      <Route path="/contact" component={Contact} />
      <Route>404 Not Found</Route>
    </Switch>
  );
}

export default App;
