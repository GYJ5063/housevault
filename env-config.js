const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BACKEND_URL': prod ? 'https://dev.housevault.co.uk/api/' : 'https://dev.housevault.co.uk/api/',
    'process.env.PRICEPREDICTION_URL': 'http://13.57.128.180:9999/house_valuation/price_prediction/',
    'process.env.PRICEPREDICTION_TOKEN': 'token 2d2f0c243235118c5a2c8a437a9a4d430b4a293a'
}