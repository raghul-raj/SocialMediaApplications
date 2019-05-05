const apiService = require('../../services/api');
const ControllerHelper = require('../../common/controllerHelper');

class Api {
  static async healthCheck(req, res) {
    const controllerHelper = new ControllerHelper(res);
    try {
      const result = await apiService.healthCheck();
      controllerHelper.sendResponse({
        code: 200,
        result: {
          result,
        },
      });
    } catch (err) {
      controllerHelper.sendErrorResponse({
        message: err,
      });
    }
  }


}

module.exports = Api;