class ControllerHelper {
  constructor(res) {
    this._res = res;
    this.httpCodesList = [200, 400];
  }

  /** ******
  sendResponse is used to send response and result if available
  ******* */
  sendResponse(resObject) {
    this._res.status(this._validHttpCode(resObject.code) || 200).send(resObject.result);
  }

  /** ******
  sendErrorResponse is used to send the error response message
  ******* */
  sendErrorResponse(resObject) {
    this._res.status(this._validHttpCode(resObject.code) || 400).send(resObject.result);
  }

  _validHttpCode(code) {
    return this.httpCodesList.indexOf(code) >= 0 ? code : null;
  }
}

module.exports = ControllerHelper;