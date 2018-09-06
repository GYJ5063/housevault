// server.js
import express from 'express';
import next from 'next';

const port = process.env.PORT || 8081;
import { getRequestHandler } from '../routes'; 
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = getRequestHandler(app)

// without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(port)
// })

// with express
app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });