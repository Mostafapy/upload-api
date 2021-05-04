const conf = require('./swagger.config');
const definitions = require('./definitions');
const docs = require('./docs');

const swaggerDocs = {
  ...conf,
  paths: {
    ...docs
  },
  components: {
    schemas: {
      ...definitions
    },
  }
};
module.exports = swaggerDocs;