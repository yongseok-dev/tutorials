import express from 'express';
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('./cert/private.key'),
  cert: fs.readFileSync('./cert/certificate.crt'),
};

const app = express();

const server = https.createServer(options, app);

app.get('/', (req, res, next) => {
  res.send('<h1>Hello SSL</h1>');
});

// START THE SERVER =================================================================
const port = 443;
server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
