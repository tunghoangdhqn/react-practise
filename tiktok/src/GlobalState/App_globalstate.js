import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  console.log(state);


  const handleSubmit = () => {
    dispatch(actions.addTodoTask(state.todoInput));
  };
  return (
    <div>
      <input
        value={state.todoInput}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button
        onClick={handleSubmit}
      >Add</button>

      <ul>
        {state.todos.map((todoTask, index) => {
          return <li key={index}>{todoTask}</li>;
        })}
      </ul>
    </div>
  );
}


export default App;