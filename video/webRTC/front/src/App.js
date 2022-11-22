import { useEffect, useRef } from 'react';
import './App.css';
import { io } from 'socket.io-client';
const SOCKET_URL = 'http://localhost:8000';

const configuration = {
  iceServers: [
    {
      urls: [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun3.l.google.com:19302',
        'stun:stun4.l.google.com:19302',
      ],
    },
  ],
};

function App() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const roomIdRef = useRef('randomString');
  const pcRef = useRef(new RTCPeerConnection(configuration));
  const socketRef = useRef(null);
  const iceCandidateRef = useRef([]);

  const createNewOffer = async () => {
    await getLocalVideo();
    // console.log('3-2 >> roomId가 없음');
    const newOffer = await pcRef.current.createOffer();
    // console.log(`>> newOffer`, newOffer);
    await pcRef.current.setLocalDescription(newOffer);
    //new-offer(offer,roomID) => 3-1.socket
    socketRef.current.emit('new-offer', {
      offer: newOffer,
      roomId: roomIdRef.current,
    });
  };

  const handleRemoteAnswer = async (answer) => {
    const remoteAnswer = new RTCSessionDescription(answer);
    console.log(`remoteAnswer`, remoteAnswer);
    await pcRef.current.setRemoteDescription(remoteAnswer);
  };

  const handleRemoteOffer = async (offer) => {
    await getLocalVideo();
    // console.log('3-1 >> roomId가 있음');
    const remoteOffer = new RTCSessionDescription(offer);
    // console.log(`remoteOffer: `, remoteOffer);
    await pcRef.current.setRemoteDescription(remoteOffer);
    const newAnswer = await pcRef.current.createAnswer(remoteOffer);
    // console.log(`newAnswer: `, newAnswer);
    await pcRef.current.setLocalDescription(newAnswer);

    //new-answer(offer,roomID) => 3-2.socket
    socketRef.current.emit('new-answer', {
      answer: newAnswer,
      roomId: roomIdRef.current,
    });
  };

  const handleJoinBtnClick = () => {
    // console.log('>> Join Click');
    //socket connect
    const socket = io(SOCKET_URL);
    socketRef.current = socket;
    // console.log(`socket: `, socket);
    //join(roomID) => 1.socket
    socket.emit('join', { roomId: roomIdRef.current });
    //remote-offer(offer) <= 2.socket
    socket.on('remote-offer', ({ offer }) => {
      // console.log(`<< remote-offer'`, offer);
      if (offer) {
        handleRemoteOffer(offer); //roomId 보유 (3-1)
        return;
      }

      createNewOffer(); //roomId 미보유 (3-2)
    });

    //remote-answer(answer) <= 4.socket
    socket.on('remote-answer', ({ answer }) => {
      // console.log('4 << remote-answer', answer);
      handleRemoteAnswer(answer);
    });

    socket.on('new-ice', ({ iceCandidates }) => {
      iceCandidates.forEach((iceCandidate) => {
        pcRef.current.addIceCandidate(iceCandidate);
      });
    });
  };

  const getLocalVideo = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideoRef.current.srcObject = localStream;
    const localTracks = localStream.getTracks();
    console.log(`local Tracks`, localTracks);
    localTracks.forEach((localTrack) => {
      pcRef.current.addTrack(localTrack, localStream);
    });
  };

  useEffect(() => {
    localVideoRef.current.onloadedmetadata = () => {
      localVideoRef.current.play();
    };
  }, []);

  useEffect(() => {
    remoteVideoRef.current.onloadedmetadata = () => {
      remoteVideoRef.current.play();
    };
  }, []);

  useEffect(() => {
    pcRef.current.addEventListener('signalingstatechange', () => {
      if (
        pcRef.current.signalingState === 'stable' &&
        pcRef.current.iceGatheringState === 'complete'
      ) {
        socketRef.current.emit('new-ice', {
          iceCandidates: iceCandidateRef.current,
          roomId: roomIdRef.current,
        });
      }
    });

    pcRef.current.addEventListener('icegatheringstatechange', () => {
      if (
        pcRef.current.signalingState === 'stable' &&
        pcRef.current.iceGatheringState === 'complete'
      ) {
        socketRef.current.emit('new-ice', {
          iceCandidates: iceCandidateRef.current,
          roomId: roomIdRef.current,
        });
      }
    });

    pcRef.current.addEventListener('icecandidate', (event) => {
      iceCandidateRef.current = [...iceCandidateRef.current, event.candidate];
    });

    pcRef.current.addEventListener('track', (event) => {
      const [remoteStream] = event.streams;
      remoteVideoRef.current.srcObject = remoteStream;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {' '}
        <video id="localVideo" ref={localVideoRef} muted />
        <video id="remoteVideo" ref={remoteVideoRef} />
        {/* <button onClick={getLocalVideo}>카메라 가져오기</button> */}
        <button onClick={handleJoinBtnClick}>영상 연결 참여</button>
      </header>
    </div>
  );
}
export default App;
