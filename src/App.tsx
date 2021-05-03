import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { TodoList } from "./components/TodoComponents/Broadcast/TodoList";
import { Local } from "./components/TodoComponents/Local/local";

import { WithoutHookCrossTab } from "./components/TodoComponents/without/WithoutHookCrossTab";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">with broadcast</Link>
        <br />
        <Link to="/local">with localStore</Link>
        <br />
        {/* <Link to="/free">free</Link> */}
        <Switch>
          <Route path="/local">
            <Local />
          </Route>

          <Route path="/">
            <TodoList />
          </Route>
          {/*         
        <Route path="/free">
          <WithoutHookCrossTab/>
        </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
