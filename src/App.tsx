import React from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { TodoList } from './components/TodoComponents/Broadcast/TodoList';
import { Local } from './components/TodoComponents/Local/local';
import { Without } from './components/TodoComponents/without/without';


function App() {

  return (
    <div className="App">
      <Router>
      <Link to="/">with broadcast</Link>
      <br/>
      <Link to="/local">with localStore</Link>
      <br/>
      <Link to="/without">without</Link>
      <Switch>
        <Route path="/local" >
            <Local/>
        </Route>

        <Route path="/">
          <TodoList/>
        </Route>
        
        <Route path="/without">
          <Without/>
        </Route>


      </Switch>
    </Router>
  </div>
  );
}

export default App;


