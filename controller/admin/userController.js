const User = require('../../schemas/UsersSchema/UserSchema');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');

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
  } catch (error) {
    next(error);
  }
};

const getASingleUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await User.find({ _id: id });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.query;
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const userInfo = {
    ...JSON.parse(req.body.user),
    photo: file,
  };

  try {
    const response = await User.findOneAndUpdate({ _id: id }, userInfo, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const updateUserWithoutProfileImg = async (req, res, next) => {
  const { id } = req.query;

  try {
    const response = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateRoles,
  getAllUsers,
  updateUser,
  getASingleUser,
  updateUserWithoutProfileImg,
};
