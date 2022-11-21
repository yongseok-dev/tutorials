import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';

const app = express();
const port = 8000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'https://localhost:5000',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log(`socket connected: ${socket.id}`);
});

app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`>>${port}번 서버 실행`);
});
