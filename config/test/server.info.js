require('dotenv').config()

const host = process.env.TEST_SERVER_HOST,
  root = process.env.TEST_SERVER_ROOT,
  username = process.env.TEST_SERVER_USER,
  password = process.env.TEST_SERVER_PASS;

exports.host = host;
exports.root = root;
exports.username = username;
exports.password = password;