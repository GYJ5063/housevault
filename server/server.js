// server.js
const express = require('express');
const next = require('next');

const port = process.env.PORT || 8081;
const routes = require('../routes'); 
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const models = require('../sequelize/models');

app.prepare()
    .then(() => {
        models.sequelize.sync().then(() => {
            const server = express();
            const api = require('./index.js');

            // // testing
            // models.users
            //     .find({ where: { email: 'admin@admin.com'} })
            //     .then(user => {
            //         if(!user) {
            //             models.users
            //             .create({ company_id: 1, first_name: 'satoshi', last_name: 'nakamoto', email: 'admin@admin.com', password: 'password' })
            //             .then(res => console.log(res));
            //         } else {
            //             models.users
            //             .validPassword('passw##ord', user.password, console.log, user);
            //         }
            //     });

            server.use('/api', api);
    
            server.get("/postcode/:postcode", (req, res) => {
                res.writeHead(302, {
                    'Location': '/house-prices/' +req.params.postcode
                });
                res.end();
            });
            server.get('*', (req, res) => {
                return handler(req, res);
            });
    
            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${port}`);
            });
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });