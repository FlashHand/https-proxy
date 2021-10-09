import httpProxy from 'http-proxy';
import fs from 'fs';
httpProxy.createServer({
	ssl: {
		key: fs.readFileSync('valid-ssl-key.pem', 'utf8'),
		cert: fs.readFileSync('valid-ssl-cert.pem', 'utf8')
	},
	target: 'https://localhost:9010',
	secure: true // Depends on your needs, could be false.
}).listen(443);
