const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BACKEND_URL': prod ? 'http://housevault.co.uk/api/' : 'https://dev.housevault.co.uk/api/'
}