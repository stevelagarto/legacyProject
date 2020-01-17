if (process.env.NODE_ENV === 'production') {
  console.log('IN PRODUCTION ENV');  
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'test') {
  console.log('IN TEST ENV');
  module.exports = require('./test.js');
} else {
  console.log('IN DEV ENV');
  module.exports = require('./dev');
}
