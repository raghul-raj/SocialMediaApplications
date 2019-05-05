const Base = require('./base');
const ApiRouter = require('./api');


class Routes extends Base {
  constructor() {
    super();
    // this.get('/', (req, res) => res.send("hi"));
    this.use('/', new ApiRouter());
  }
}

module.exports = Routes;