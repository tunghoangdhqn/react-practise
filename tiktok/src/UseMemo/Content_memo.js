import { memo } from "react";

function Content({ count, handleIncrease }) {
  console.log("content log");

  return (
    <>
      <button onClick={handleIncrease}>Click count 2</button>
      <h2>Country in Content{count}</h2>
    </>

  );
}

export default memo(Content);