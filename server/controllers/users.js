const bcrypt = require('bcrypt');
const { User } = require('../db/models');


const registerUser = async (req, res) => {
  console.log('register', req.body);
  const { name, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 5);
    console.log('hashPass', hashPass);
    const newUser = await User.create({ name: name, password: hashPass });
    const userId = newUser.id;
    req.session.newUser = { id: newUser.id, name: name };
    return res.status(200).json({
      id: newUser.id,
      name: name,
      password: password,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const loginUser = async (req, res) => {
  const { name, password } = req.body;
  console.log('login', req.body);
  const newUser = await User.findOne({ where: { name } });
  if (newUser) {
    const isValidPassword = await bcrypt.compare(password, newUser.password);
    if (isValidPassword) {
      req.session.newUser = { id: newUser.id, name: newUser.name }; // create cookie and write to DB session storage
      res.json({
        id: newUser.id,
        name: newUser.name,
      });
    }
  } else {
    const textError = 'Не верное имя пользователя или пароль';
    console.log(textError);
  }
};

const logout = async (req, res, next) => {
  console.log(req.session);
  req.session.destroy();
  res.clearCookie('cookie');
  res.end();
};

module.exports = {
  registerUser, loginUser, logout,
};