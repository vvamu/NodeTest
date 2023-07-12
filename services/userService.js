const {User} = require('../models/user')


module.exports = {
    getAll: async () => {
      return User.find({});
    }
}  