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
        login: (root, { username, password }, a) => {
            console.log(root, { username, password }, JSON.stringify(a));
            const authenticate = passport.authenticate('local', console.log);
            console.log(authenticate);
            authenticate(username, password, function(err, user) {
                console.log(err, user);
                if(err) {
                    return err;
                }
                return user;
            });
            // return new Promise((resolve, reject) => {
            //     console.log(root, { username, password }, { login });
            //     // const authenticate = passport.authenticate(username, password);
            //     // console.log(authenticate);
            //     return passport.authenticate('local', function(err, user) {
            //         if(err) {
            //             console.log("the error is: ", err);
            //             reject(err);
            //         }
            //         console.log("the user is: ", user);
            //         resolve(user);
            //     });
                // return ( username, password, (err, user) => {
                //     // user returns false if username / email incorrect
                //     if (user) {
                //         console.log('user is: ', user);
                //         login(user, () => resolve(user));
                //     } else {
                //         reject('Email / Password Incorrect');
                //     }
                // });
            // });
        }
    }
};