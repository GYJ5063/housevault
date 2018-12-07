const routes = module.exports = require('next-routes')()

routes
     .add('about-us', '/about-us')
    .add('report', '/report/:id')
     // signin
    .add('property-investors', '/property-investors')
    .add('quick-valuation', '/quick-valuation')
    .add('registration', '/registration')
    .add('login', '/login')
    .add('private-homepage', '/private-homepage')
    .add('estate-agents', '/estate-agents')
    .add('property-developers', '/property-developers')
    .add('reset', '/reset/:token')
    .add('forgot-password', '/forgot-password')
    .add('homepage', '/');
