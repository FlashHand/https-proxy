import express from 'express' ;
import https from 'https' ;
import fs from 'fs' ;
import path from 'path';

console.log(__dirname);
// This line is from the Node.js HTTPS documentation.
const options = {
	key: fs.readFileSync(path.resolve(__dirname, '../cert/server-key.pem')),
	cert: fs.readFileSync(path.resolve(__dirname, '../cert/server-cert.pem'))
};
// Create a service (the app object is just a callback).
const app = express();
app.get('/hello', (req, res) => {
	res.send('hello proxy');
});
// Create an HTTP service.
// http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(28000);
console.log('https server:12800');
