import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

const port = 8000;
const CORS_URL = 'http://localhost:3000';

const options = {
  key: fs.readFileSync('../cert/private.key'),
  cert: fs.readFileSync('../cert/certificate.crt'),
};

const app = express();
const server = https.createServer(options, app);

const io = new Server(server, {
  cors: {
    origin: CORS_URL,
    credentials: true,
  },
});

const offerMap = new Map();
const socketMap = new Map();

io.on('connection', (socket) => {
  socketMap.set(socket.id, roomId);
  console.log(`socket connected: ${socket.id}`);
  //1.client =>join(roomId) caller.req
  socket.on('join', ({ roomId }) => {
    console.log(`join-room-id: ${roomId}`);
    socket.join(roomId);
    //방이 있는지 체크
    const prevOffer = offerMap.get(roomId);
    // console.log(`prevOffer: `, prevOffer);

    //2.client <= remote-offer(offer)
    socket.emit('remote-offer', { offer: prevOffer });
  });

  //3-1.client => new-offer(offer,roomID)
  socket.on('new-offer', ({ offer, roomId }) => {
    offerMap.set(roomId, offer);
  });

  //3-2.client => new-answer(offer,roomID)
  socket.on('new-answer', ({ answer, roomId }) => {
    //4.clint <= remote-answer(answer)
    console.log(`4.clint <= remote-answer(answer)`, answer);
    socket.to(roomId).emit('remote-answer', { answer });
  });

  socket.on('new-ice', ({ iceCandidates, roomId }) => {
    socket.to(roomId).emit('new-ice', { iceCandidates });
  });

  socket.on('disconnect', () => {
    const closeRoomId = socketMap.get(socket.id);
    socketMap.delete(socket.id);
    offerMap.delete(closeRoomId);
  });
});

app.use(
  cors({
    origin: CORS_URL,
    credentials: true,
  })
);

server.listen(port, () => {
  console.log(`>>${port}번 서버 실행`);
});
