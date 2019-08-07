const _ = require('lodash')
const server = require('./config/test/server.info')
const ssh2 = require('./modules/ssh2')
const updatefiles = require('./config/test/updatefiles')

const main = async () => {
  for (path of updatefiles.paths) {
    await ssh2.connect(server)
    await ssh2.upload(server, path)
    await ssh2.end()
  }
}

main()