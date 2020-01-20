if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
  module.exports = require('./tests');
} {
  module.exports = require('./dev');
}
