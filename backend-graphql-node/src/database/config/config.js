const config = require('../../config');

const development = test = production = { ...config.db, operatorsAliases: false };

module.exports = {
  development, test, production
}
