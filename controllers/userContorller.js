const userService = require("../services/userService.js");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.json(await userService.getAll());
    } catch (error) {
      next(error);
    }
  }
}