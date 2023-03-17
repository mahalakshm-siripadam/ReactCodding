import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const [user, setUser] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const { userId, todoId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>User Detail</h2>
      <div>
        <button onClick={() => history.push(location.pathname.replace(`/todos/${todoId}`, ""))}>
          Back to Todo List
        </button>
      </div>
      {user && (
        <table>
          <thead>
            <tr>
              <th>Todo ID</th>
              <th>Todo Title</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todoId}</td>
              <td>{location.state.todo.title}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
    </div>