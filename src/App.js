import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from "react-router-dom";


const AnimePage = () => (
  <div>
    <h1>ANIMEEEEEE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact={true} path='/' component={Homepage} />
      <Route path='/anime' component={AnimePage} />
    </div>
  );
}

export default App;
