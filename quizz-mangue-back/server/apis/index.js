module.exports = (function APIIndex() {
  /**
   * boots up api submodules
   * @function
   * @param {Object} db - a database object (mysql@npm) containing a valid connection to mysql
   * @param {Array} apis - an array containing name(s) of existing api file(s) (minus .js extension)
   * @return {Object}
   */
  const APIWrapper = function APIWrapper(db, apis) {
    const routers = [];
    const APIVersion = 1;

    for (let api of apis) {
      routers.push(require("./" + api)(db));
    }

    return { routers, version: APIVersion };
  };

  return APIWrapper;
})();
