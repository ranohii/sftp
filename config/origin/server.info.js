require('dotenv').config()

const host = process.env.ORIGIN_SERVER_HOST,
  root = process.env.ORIGIN_SERVER_ROOT,
  username = process.env.ORIGIN_SERVER_USER,
  password = process.env.ORIGIN_SERVER_PASS;

exports.host = host;
exports.root = root;
exports.username = username;
exports.password = password;