import { useState, memo } from 'react';
import Content from './Content';
function App() {

  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const [count2, setCount2] = useState(0);
  const increase2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <Content count={count} onIncrease={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>

    </div>
  );
};

export default App;
