const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BACKEND_URL': prod ? 'http://housevault.co.uk/api/' : 'http://127.0.0.1:8000/api/'
}