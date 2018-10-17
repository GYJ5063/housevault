const { AuthenticationError } = require('apollo-server-express');
const db = require('../../sequelize/models');
const jwt = require('jsonwebtoken');

module.exports = {
    Query: {
        profile: (root, { username, password }, req) => {
            return new Promise((resolve, reject) => {
                if(req.user) {
                    console.log('no user: ', req);
                    return resolve(req.user);
                }
                console.log(root, username, password , JSON.stringify(req));
                return reject('Not Authenticated');
            });
        },
        restrictedEndPoint: (root, args, { user }) => {
            if(!user) {
                return new AuthenticationError('restricted endpoint');
            }
            return "heck yes!";
        }
    },
    Mutation: {
        login: (root, { email, password }, { SECRET }) => {
            return db.users.find({ where: { email }})
                .then(user => {
                    if(!user) {
                        throw new Error("user not found error");
                    }
                    return db.users.validPassword(password, user.password).then(valid => {
                        if(valid) {
                            const token = jwt.sign(
                                { user: { id: user.id, email: user.email }},
                                SECRET,
                                { expiresIn: '1y' });
                            return token;
                        }
                        throw new Error("password or username incorrect");
                    });

                });
        }
    }
};