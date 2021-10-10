//先穿透到12800端口
import httpProxy from 'http-proxy';
import fs from 'fs';
import path from 'path';
httpProxy.createServer({
	ssl: {
		key: fs.readFileSync(path.resolve(__dirname, './cert/server-key.pem'), 'utf8'),
		cert: fs.readFileSync(path.resolve(__dirname, './cert/server-cert.pem'), 'utf8')
	},
	target: 'https://127.0.0.1:28000',
	secure: false
}).listen(12800);
