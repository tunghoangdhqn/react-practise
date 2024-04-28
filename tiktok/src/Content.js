import { memo } from "react";

function Content({ count }) {
  console.log("content log");

  return (
    <h2>Country in Content{count}</h2>
  );
}

export default memo(Content);