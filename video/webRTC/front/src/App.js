import { useEffect, useRef } from 'react';
import './App.css';
import { io } from 'socket.io-client';

// const configuration = {
//   iceServers: [
//     {
//       urls: [
//         'stun:stun.l.google.com:19302',
//         'stun:stun1.l.google.com:19302',
//         'stun:stun2.l.google.com:19302',
//         'stun:stun3.l.google.com:19302',
//         'stun:stun4.l.google.com:19302',
//       ],
//     },
//   ],
// };

function App() {
  const localVideoRef = useRef(null);
  // const roomIdRef = useRef('randomString');
  // const pcRef = useRef(new RTCPeerConnection(configuration));

  const handleJoinBtnClick = () => {
    console.log('bt click');
    const socket = io('https://localhost:8000');
    console.log(`socket: ${socket}`);
  };

  const getLocalVideo = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideoRef.current.srcObject = mediaStream;
  };

  useEffect(() => {
    localVideoRef.current.onloadedmetadata = () => {
      localVideoRef.current.play();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {' '}
        <video id="localVideo" ref={localVideoRef} muted />
        <button onClick={getLocalVideo}>카메라 가져오기</button>
        <button onClick={handleJoinBtnClick}>영상 연결 참여</button>
      </header>
    </div>
  );
}
export default App;
