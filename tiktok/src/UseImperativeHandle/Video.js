import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from '../videos/video_test.mp4';

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      play() {
        videoRef.current.play();
      },
      pause() {
        videoRef.current.pause();
      }
    };

  });
  return (
    <video
      width={500}
      src={video1}
      //ref={ref}
      ref={videoRef}
    />
  );
}

export default forwardRef(Video);