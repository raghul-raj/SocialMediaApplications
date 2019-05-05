class General {
  async healthCheck() {
    try {
      return "healthy";
    } catch (err) {
      throw err;
    }
  }

}

module.exports = new General();