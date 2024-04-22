import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums'];


function Content() {
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const timerID = setInterval(() => {
      setCountdown(preState => preState - 1);
      console.log(countdown);
    }, 1000);
    // clearn up function
    return (
      () => { clearInterval(timerID); }
    );
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000);
  // }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default Content;