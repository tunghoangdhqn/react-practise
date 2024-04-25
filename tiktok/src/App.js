import { useEffect, useRef, useState, memo } from 'react';
import Content from './Content';
function App() {

  const [count, setCount] = useState(0);
  const increase = () => {

  };
  return (
    <div>
      <Content />
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
    </div>
  );
};

export default memo(App);
