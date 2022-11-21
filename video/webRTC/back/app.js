import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';

const app = express();
const port = 8000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`socket connected: ${socket.id}`);
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

server.listen(port, () => {
  console.log(`>>${port}번 서버 실행`);
});
