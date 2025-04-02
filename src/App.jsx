// src/App.jsx
import React from 'react';
import { Switch, Route } from 'wouter';

// Your page components
import HomePage from './views/HomePage';
import Athletes from './pages/Athletes';
import Agents from './pages/Agents';
import Colleges from './pages/Colleges';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={HomePage} />
      
      {/* Four main pages */}
      <Route path="/athletes" component={Athletes} />
      <Route path="/agents" component={Agents} />
      <Route path="/colleges" component={Colleges} />
      <Route path="/contact" component={Contact} />
      
      {/* Fallback (404) */}
      <Route>404 Not Found</Route>
    </Switch>
  );
}

export default App;
