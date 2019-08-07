
const Client = require('ssh2').Client
const moment = require('moment');
const backupDate = moment().format('YYYYMMDD')
const conn = new Client()

const connect = (server) => {
  return new Promise((resolve, reject) => {
    conn.on('ready', function () {
      // console.log("ready sftp...")
      return resolve()
    }).connect({
      host: server.host,
      port: 22,
      username: server.username,
      password: server.password
    })
  });
}

const upload = (server,path) => {
  return new Promise((resolve, reject) => {
    conn.sftp(function (err, sftp) {
      if (err) throw err
      sftp.fastPut(path, server.root + path, {}, function (err) {
        if (err) {
          console.log("upload error. " + path)
          return resolve()
        } else {
          console.log("uploaded. " + path)
          return resolve()
        }
      })
    })
  });
}

const rename = (server,path) => {
  return new Promise((resolve, reject) => {
    conn.sftp(function (err, sftp) {
      if (err) throw err
      sftp.rename(server.root + path, server.root + path + '_' + backupDate, function (err) {
        if (err) {
          console.log("rename error. " + path)
          return resolve()
        } else {
          console.log("renamed. " + path)
          return resolve()
        }
      })
    })
  });
}

const unlink = (server,path) => {
  return new Promise((resolve, reject) => {
    conn.sftp(function (err, sftp) {
      if (err) throw err
      sftp.unlink(server.root + path, function (err) {
        if (err) {
          console.log("remove error. " + path)
          return resolve()
        } else {
          console.log("removed. " + path)
          return resolve()
        }
      })
    })
  });
}

const end = () => {
  return new Promise((resolve, reject) => {
    conn.end()
    conn.on('end', function () {
      return resolve()
    })
  });
}

exports.connect = connect
exports.upload = upload
exports.rename = rename
exports.unlink = unlink
exports.end = end