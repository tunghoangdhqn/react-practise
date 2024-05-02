import { BrowserRouter as Router } from 'react-router-dom';
import ModuelCSS from "./LearnCSS/ModuleCSS";
import ReactRouterTest from "./pages/ReactRouterTest";

function App() {

  return (
    <Router>
      <ReactRouterTest />
    </Router>
  );
}

export default App;