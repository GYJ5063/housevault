const db = require('../../sequelize/models');
const passport = require('../passport');

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
        }
    },
    Mutation: {
        login: (root, { email, password }, context) => {
            return db.users.find({ where: { email: email }})
                .then(user => {
                    if(!user) {
                        return "user not found error";
                    }
                    return db.users.validPassword(password, user.password).then(valid => {
                        if(valid) {
                            return "token"
                        }
                        return "not valid error";
                    });

                });
        }
    }
};