import "./App.css";
import { get, post } from "./utility/api";

function App() {
  get("/api/read").then((data) => console.log(data));
  post("/api/create", {
    id: 1,
    title: "Test",
    description: "Lorem ipsum",
  });

  return <div className="App"></div>;
}

export default App;
