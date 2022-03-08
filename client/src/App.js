import { useState } from "react";
import "./App.css";
import { get, post, put, taBort } from "./utility/api";

function App() {
  const [id, setId] = useState(0);
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div>
        <input
          value={id}
          onChange={(event) => setId(event.target.value)}
        ></input>
        <button
          onClick={() => {
            get("/api/read").then((response) => setTodos(response.data));
          }}
        >
          READ
        </button>
        <button
          onClick={() => {
            post("/api/create", {
              id: counter,
              title: "test " + counter,
              description: "Lorem ipsum " + counter,
            }).then((response) => console.log(response));
            setCounter((previous) => previous + 1);
          }}
        >
          CREATE
        </button>
        <button
          onClick={() => {
            put(`/api/update/${id}`, {
              title: "Updated!",
              description: "Updated!",
            }).then((response) => console.log(response));
          }}
        >
          UPDATE
        </button>
        <button
          onClick={() => {
            taBort(`/api/delete/${id}`);
          }}
        >
          DELETE
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
