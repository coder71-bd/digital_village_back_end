const User = require('../../schemas/UsersSchema/User');

const getAllUsers = async (req, res, next) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    next(error);
  }
};

const updateRoles = () => {
  try {
    console.log('update the role of user');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateRoles,
  getAllUsers,
};
