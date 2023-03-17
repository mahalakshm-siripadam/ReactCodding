import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleSort = () => {
    const sortedTodos = [...todos].sort((a, b) => a.id - b.id);
    setTodos(sortedTodos);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      todo.id.toString().includes(searchTermLowerCase) ||
      todo.title.toLowerCase().includes(searchTermLowerCase) ||
      todo.completed.toString().toLowerCase().includes(searchTermLowerCase)
    );
  });

  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <input type="text" onChange={handleSearch} value={searchTerm} />
        <button onClick={handleSort}>Sort by ID</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Complete" : "Incomplete"}</td>
              <td>
                <Link
                  to={{
                    pathname: `/users/${todo.userId}/todos/${todo.id}`,
                    state: { todo },
                  }}
                >
                  View User
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
