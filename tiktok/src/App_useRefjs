import { useEffect, useRef, useState } from 'react';
function App() {

  const timerId = useRef(99);
  const prevCount = useRef();
  const h1Ref = useRef();

  console.log(timerId);

  const [count, setCount] = useState(60);

  // chạy sau khi render DOM
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  // 
  useEffect(() => {
    console.log("in useEffect: ", h1Ref.current);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    console.log("start", timerId);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop:", timerId);
  };
  console.log(count, prevCount.current);
  console.log("not in useEffect: ", h1Ref.current);
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
export default App;
