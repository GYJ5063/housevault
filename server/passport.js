const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../sequelize/models');

// create cookie
passport.serializeUser(function(user, done) {
    done(null, user);
});

// delete cookie
passport.deserializeUser(function(email, done) {
    models.users
        .find({ where: { email: email} })
        .then(user => done(null, user))
        .catch(err => done(err, null));
});

// authentication
passport.use(new LocalStrategy(function(email, password, done) {
    models.users
        .find({ where: { email: email } })
        .then(user => {
            if(!user) {
                console.log('no user: ', email, password, done);
                return done(null, false);
            }
            const isMatch = models.users.validPassword(password, user.password, done, user);
            console.log('isMatch: ', isMatch);
        })
        .catch(err => done(err, null));
}));

module.exports = passport;