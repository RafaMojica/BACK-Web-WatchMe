const jwt = require("jsonwebtoken");

const tokenGenerator = function (payload) {
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
  return token;
};

const validateToken = function (token) {
  const payload = jwt.verify(token, process.env.SECRE);
  return payload;
};

module.exports = { tokenGenerator, validateToken };