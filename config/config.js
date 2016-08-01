const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

if (process.env.NODE_ENV === 'production') {
  module.exports = Object.assign({
    host: '',
    port: ''
  }, environment);
} else {
  module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000

  }, environment);
}

