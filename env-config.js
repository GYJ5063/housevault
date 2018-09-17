const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BACKEND_URL': prod ? 'https://dev.housevault.co.uk/api/' : 'https://dev.housevault.co.uk/api/',
    'process.env.API': 'http://localhost:8081/api/'
}