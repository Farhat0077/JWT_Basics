const CustomAPIError =require('./custom-error')
const {statusCodes, StatusCodes}=require('http-status-codes')
class UnauthenticatedErorr extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode=StatusCodes.UNAUTHORIZED 
    }
  }
  
  module.exports = UnauthenticatedErorr
  