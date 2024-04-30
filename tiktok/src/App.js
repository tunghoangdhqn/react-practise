
import { useImperativeHandle, useRef, useEffect } from "react";
import Video from "./UseImperativeHandle/Video";


function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <h1>Hearding</h1>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div >
  );
}


export default App;