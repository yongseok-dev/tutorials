import express from 'express';
import https from 'https';

const options = {
  key: fs.readFileSync(path.join('cert/private.key')),
  cert: fs.readFileSync(path.join('cert/certificate.crt')),
};

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello SSL</h1>');
});

https.createServer(options, app).listen(443, () => {
  console.log('443 port open');
});
