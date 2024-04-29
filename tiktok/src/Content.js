import { memo } from "react";

function Content({ count, onIncrease }) {
  console.log("content log");

  return (
    <>
      <button onClick={onIncrease}>Click count</button>
      <h2>Country in Content{count}</h2>
    </>
  );
}

export default memo(Content);