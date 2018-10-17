const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8081;
const routes = require('../routes'); 
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const models = require('../sequelize/models');

const typeDefs = require('./data/schema');
const resolvers = require('./data/resolvers');

const SECRET = 'keyboard cat';

app.prepare()
    .then(() => {
        models.sequelize.sync().then(() => {
            const server = express();

            server.use(bodyParser.urlencoded({
                extended: true
            }));
            
            server.use(bodyParser.json());

            const api = require('./index.js');

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

            const apolloServer = new ApolloServer({
                typeDefs,
                resolvers,
                context: ({ req }) => {
                    let user = null;
                    let bearer = null;
                    const token = req.headers.authorization;

                    if(token) {
                        const jwt = require('jsonwebtoken');
                        try {
                            bearer = jwt.verify(token, SECRET);
                            user = bearer.user;
                        } catch (error) {
                            console.log(error);
                        }
                    }

                    return { user, SECRET };
                } 
            });

            apolloServer.applyMiddleware({ app: server });

            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`)
            });
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });