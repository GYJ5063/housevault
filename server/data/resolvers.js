const db = require('../../sequelize/models');
const passport = require('../passport');

module.exports = {
    Query: {
        profile: (root, args, req) => {
            return new Promise((resolve, reject) => {
                if(req.user) {
                    console.log('no user: ', req);
                    return resolve(req.user);
                }
                console.log(root, args, JSON.stringify(req));
                return reject('Not Authenticated');
            });
        }
    },
    Mutation: {
        login(root, { email, password }, { login }) {
            return new Promise((resolve, reject) => {
                console.log(root, { email, password }, { login });
                return passport.authenticate('local', email, password, console.log)( email, password, (err, user) => {
                    // user returns false if username / email incorrect
                    if (user) {
                        console.log('user is: ', user);
                        login(user, () => resolve(user));
                    } else {
                        reject('Email / Password Incorrect');
                    }
                })
            });
        }
    }
};