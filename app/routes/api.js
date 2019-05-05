const Base = require('./base');
const ApiController = require('../controllers/api');

class General extends Base {
  constructor() {
    super();
    this.get('/health', ApiController.healthCheck);
  }
}

module.exports = General;