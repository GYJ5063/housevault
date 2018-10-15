// server.js
const express = require('express');
const next = require('next');
const expressValidator = require('express-validator');
const { ApolloServer } = require('apollo-server');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('node-uuid');

const passport = require('./passport');

const port = process.env.PORT || 8081;
const routes = require('../routes'); 
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const models = require('../sequelize/models');

const typeDefs = require('./data/schema');
const resolvers = require('./data/resolvers');

app.prepare()
    .then(() => {
        models.sequelize.sync().then(() => {
            const server = express();
            // Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
            server.use(expressValidator());

            // populates req.cookies with any cookies that came along with the request
            server.use(cookieParser());

            server.use(bodyParser.urlencoded({
                extended: true
            }));
            
            server.use(bodyParser.json());

            // passport's session piggy-backs on express-session
            server.use(
                session({
                    genid: function(req) {
                        return uuid.v4();
                    },
                    secret: 'Z3]GJW!?9uP"/Kpe'
                })
            );
            //Provide authentication and user information to all routes
            server.use(passport.initialize());
            server.use(passport.session());

            const api = require('./index.js');

            server.use('/api', api);

            server.get("/postcode/:postcode", (req, res) => {
                res.writeHead(302, {
                    'Location': '/house-prices/' +req.params.postcode
                });
                res.end();
            });

            server.use('/login', bodyParser.urlencoded({ extended: true }));

            // login
            server.post(
                '/login',
                passport.authenticate('local', {
                    successRedirect: '/',
                    failureRedirect: '/notauth',
                    failureFlash: true
                }, function(req, res) {
                    console.log("hit: ", req, res);
                })
            );

            server.get('*', (req, res) => {
                return handler(req, res);
            });

            const apolloServer = new ApolloServer({ typeDefs, resolvers, server });

            apolloServer.listen(port).then(({ url }) => {
                console.log(`🚀 Server ready at ${url}`)
              });

            // server.listen(port, (err) => {
            //     if (err) throw err;
            //     console.log(`> Ready on http://localhost:${port}`);
            // });
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });