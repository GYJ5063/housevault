const routes = module.exports = require('next-routes')()

routes
     .add('about-us', '/about-us')
    // signin
    .add('quick-valuation', '/quick-valuation')
    .add('registration', '/registration')
    .add('login', '/login')
    .add('private-homepage', '/private-homepage')
    .add('homepage', '/');
