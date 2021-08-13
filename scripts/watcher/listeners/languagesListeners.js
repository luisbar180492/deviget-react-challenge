const fs = require('fs-extra')

exports.execute = (languagesFolder, languagesExcludedFiles) => () => {
  try {
    fs.writeFile(
      `${languagesFolder}/index.js`,
      'IMPORTS\n\nexport {\nEXPORTS\n}'
      .replace('IMPORTS', getImports(languagesFolder, languagesExcludedFiles).join('\n'))
      .replace('EXPORTS', getExports(languagesFolder, languagesExcludedFiles).join('\n'))
    )
  } catch (error) {
    console.log(`languagesListener:execute:catch:${error.message}`)
  }
}

const getImports = (languagesFolder, languagesExcludedFiles) => {
  return getFileNamesByPath(languagesFolder)
  .filter(item => !languagesExcludedFiles.includes(item))
  .splitBy('.', (itemSplitted) => itemSplitted)
  .map(itemSplitted => `import ${itemSplitted[0]} from './${itemSplitted[0]}.json'`)
}

const getExports = (languagesFolder, languagesExcludedFiles) => {
  return getFileNamesByPath(languagesFolder)
  .filter(item => !languagesExcludedFiles.includes(item))
  .splitBy('.', (itemSplitted) => ` ${itemSplitted[0]},`)
}

const getFileNamesByPath = (path) => {
  return fs.readdirSync(path, { withFileTypes: true })
  .filter(item => item.isFile())
  .map(item => item.name)
}