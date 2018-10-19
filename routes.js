const routes = module.exports = require('next-routes')()

routes.add('online-estate-agent-reviews', '/online-estate-agent-reviews')
    .add('property-buying-company-reviews', '/property-buying-company-reviews')
    .add('town', '/town/:town')
    .add('culture', '/property/:postcode/:address/culture')
    .add('property-stats', '/property/:postcode/:address/property-stats')
    .add('property', '/property/:postcode/:address')
    .add('epc', '/property/:postcode/:address/epc')
    .add('sold-prices', '/property/:postcode/:address/sold-prices')
    .add('local-area', '/property/:postcode/:address/local-area')

    .add('people', '/property/:postcode/:address/people')
    .add('broadband', '/property/:postcode/:address/broadband')
    .add('crime-data', '/property/:postcode/:address/crime-data')
    .add('town-postcode-list', '/towns')
    .add('postcodes', '/postcodes')
    .add('school', '/school/:school')
    .add('street', '/house-prices/:postcode')
    .add('valuation', '/valuation/:id')
    .add('subpage', '/:page/:sub')
    .add('about-us', '/about-us')

    // signin
    .add('registration', '/registration')
    .add('login', '/login')
    .add('private-homepage', '/private-homepage')
    .add('profile', '/profile')

    .add('page', '/:page')
    .add('homepage', '/');
