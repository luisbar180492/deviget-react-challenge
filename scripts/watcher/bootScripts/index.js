(() => {
  const fs = require('fs')

  fs.readdirSync(`${__dirname}`).forEach((file) => {
    const moduleName = file.replace('.js', '')
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
      exports[moduleName] = require(`./${moduleName}`)
    }
  })
})()
