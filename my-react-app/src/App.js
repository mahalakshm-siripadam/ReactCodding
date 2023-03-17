import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <h1>React Coding Challenge</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route
            exact
            path="/users/:userId/todos/:todoId"
            component={UserDetail}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
