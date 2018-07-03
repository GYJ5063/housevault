const routes = module.exports = require('next-routes')()

routes
    .add('town', '/town/:town')
    .add('property', '/property/:postcode/:address')
    .add('epc', '/property/:postcode/:address/epc')
    .add('sold-prices', '/property/:postcode/:address/sold-prices')
    .add('local-area', '/property/:postcode/:address/local-area')
    .add('culture', '/property/:postcode/:address/culture')
    .add('property-stats', '/property/:postcode/:address/property-stats')
    .add('people', '/property/:postcode/:address/people')
    .add('town-postcode-list', '/towns')
    .add('street', '/postcode/:postcode');