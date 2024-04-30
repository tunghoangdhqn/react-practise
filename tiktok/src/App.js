import Context from "./Context/Context";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <h1>app</h1>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Context />
    </div>
  );
}


export default App;