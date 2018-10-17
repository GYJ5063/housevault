const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../sequelize/models');

// create cookie
passport.serializeUser(function(user, done) {
    console.log('serialize run: ', user, done);
    done(null, user.id);
});

// delete cookie
passport.deserializeUser(function(id, done) {
    console.log('deserialize run: ', id, done);
    models.users
        .find({ where: { id: id } })
        .then(user => done(null, user))
        .catch(err => done(err, null));
});

// authentication
passport.use(
    'local',
    new LocalStrategy(function(username, password, done) {
    models.users
        .find({ where: { email: username } })
        .then(user => {
            if(!user) {
                console.log('no user: ', username, password, done);
                return done(null, false);
            }
            const validPassword = models.users.validPassword(password, user.password);
            if(validPassword){
                return done(null, user);
            }
            return done(null, res);
        })
        .catch(err => {
            console.log('error: ', username, password, done);
            done(err, null);
        });
}));

module.exports = passport;