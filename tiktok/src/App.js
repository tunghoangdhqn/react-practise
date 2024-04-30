import { useContext } from "react";
import { StoreContext } from "./GlobalState/store";

function App() {
  const [state, dispatch] = useContext(StoreContext);
  console.log(state);

  return (
    <div>
      <h1>app</h1>
    </div>
  );
}


export default App;