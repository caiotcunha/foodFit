class InternalServerError extends Error {
    constructor(msg) {
      super(msg);
      this.name = 'InternalServerError';
    }
  }
  
  module.exports = InternalServerError;