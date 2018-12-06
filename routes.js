const routes = module.exports = require('next-routes')()

routes
     .add('about-us', '/about-us')
    .add('report', '/report/:id')
    .add('quick-valuation', '/quick-valuation')
    .add('registration', '/registration')
    .add('login', '/login')
    .add('dashboard', '/dashboard')
    .add('company-settings', '/company/:id/settings')
    .add('reset', '/reset/:token')
    .add('forgot-password', '/forgot-password')
    .add('homepage', '/');
