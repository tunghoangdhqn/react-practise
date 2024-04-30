import { useState, memo, useCallback } from 'react';
import Content from '../Content';
function App() {

  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);


  const [count2, setCount2] = useState(0);
  const increase2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <Content count={count} onIncrease={handleIncrease} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
    </div>
  );
};

export default App;
