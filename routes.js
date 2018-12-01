const routes = module.exports = require('next-routes')()

routes
     .add('about-us', '/about-us')
    .add('report', '/report/:id')
     // signin
    .add('quick-valuation', '/quick-valuation')
    .add('registration', '/registration')
    .add('login', '/login')
    .add('private-homepage', '/private-homepage')
    .add('reset', '/reset/:token')
    .add('forgot-password', '/forgot-password')
    .add('homepage', '/');
