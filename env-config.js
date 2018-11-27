const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BACKEND_URL': prod ? 'https://dev.housevault.co.uk/api/' : 'https://dev.housevault.co.uk/api/',
    'process.env.PRICEPREDICTION_URL': 'https://api.housevault.co.uk/house_valuation/price_prediction/',
    'process.env.PRICEPREDICTION_TOKEN': 'Token 2d2f0c243235118c5a2c8a437a9a4d430b4a293a',
    'process.env.API': prod ? 'https://housevault.co.uk/api/' : 'http://localhost:8081/api/',
    'process.env.GRAPHQL': prod ? 'https://dev.housevault.co.uk/graphql' : 'http://localhost:4000/graphql',
    'process.env.IMAGES_URL': 'https://s3.eu-west-2.amazonaws.com/housevault-images/',
    'process.env.GOOGLESTREETVIEW_API' : 'AIzaSyDpdQ4Wb1S8CIVn8fu6-2n53rbIZEFkQn0'
}