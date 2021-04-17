import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ProjectLogin } from './components/projectLogin/ProjectLogin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserLogin } from './components/UserLogin/UserLogin';
import UseLocalStorage from './hooks/UseLocalStorage';

function App() {
  const [id, setId] = UseLocalStorage('id')
  const [name, setName] = UseLocalStorage("nombre")
 
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/todo">
          {name ? <Dashboard  id={id} name={name} />: <Route path="/"/>}
          
        </Route>

        <Route path="/">
          <>
          {
            id ? 
              <UserLogin id={id}  onNameSubmit={setName}/> 
            : 
              <ProjectLogin  onIdSubmit={setId}/>
            }
          </>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
