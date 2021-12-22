import httpProxy from 'http-proxy';
import fs from 'fs';
import path from 'path';
httpProxy.createServer({
	ssl: {
		key: fs.readFileSync(path.resolve(__dirname, './cert/server-key.pem'), 'utf8'),
		cert: fs.readFileSync(path.resolve(__dirname, './cert/server-cert.pem'), 'utf8')
	},
	// target: 'https://192.168.0.102:12800',
	target: 'https://192.168.152.69:12800',

	secure: false
}).listen(28000);
