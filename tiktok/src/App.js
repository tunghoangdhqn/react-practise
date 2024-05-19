import { useState } from "react";
import Post from "./components/Post";
function App() {
  const [todos, setTodos] = useState([{ name: "lau nha" }, { name: "lau nha 2" }]);
  const [inputState, setInputState] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, { name: inputState }]);
  };

  const handleDeleteTodo = (index) => {
    //console.log(todos.slice(index));
    console.log(index);
    setTodos(todos.slice(index + 1));
  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setInputState(e.target.value);
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((value, index) => {
        return (
          <div key={index}>
            <h2>{value.name}</h2>
            <span onClick={() => handleDeleteTodo(index)}>X</span>
          </div>
        );
      })}
    </div>
  );
}
export default App;
