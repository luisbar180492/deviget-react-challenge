const fs = require('fs-extra')

exports.execute = (pagesFolder, pagesConfigFolder, routesConfigFile, excludedFiles) => () => {
  try {
    removeUnusedpageConfigFiles(
      getFileNamesByPath(pagesConfigFolder),
      getFileNamesByPath(pagesFolder),
      pagesConfigFolder,
    )
    const dataMapped = filterAndMapPageFileNames(
      getFileNamesByPath(pagesFolder),
      excludedFiles,
    )
  
    createRouterConfigFile(dataMapped, routesConfigFile)
    createPageConfigFiles(dataMapped, pagesConfigFolder)
  } catch (error) {
    console.log(`routesListener:execute:catch:${error.message}`)
  }
}

const removeUnusedpageConfigFiles = (pageConfigFiles, pageFiles, pagesConfigFolder) => {
  pageConfigFiles
  .splitBy('.', itemSplitted => itemSplitted[0])
  .toLowerCase(lowerCasedItem => lowerCasedItem)
  .filter(item => !pageFiles
    .splitBy('.', itemSplitted => itemSplitted[0])
    .toLowerCase(lowerCasedItem => lowerCasedItem).includes(item)
  )
  .map(item => `${item}.js`)
  .forEach(item => fs.remove(`${pagesConfigFolder}/${item}`))
}

const filterAndMapPageFileNames = (publicPageFiles, excludedFiles) => {
  return publicPageFiles
  .filter(item => !excludedFiles.includes(item))
  .splitBy('.', itemSplitted => itemSplitted)
  .map(itemSplitted => ({
    name: itemSplitted[0],
    extension: itemSplitted[1],
  }))
}

const getFileNamesByPath = (path) => {
  return fs.readdirSync(path, { withFileTypes: true })
  .filter(item => item.isFile())
  .map(item => item.name)
}

const createRouterConfigFile = (data, routesConfigFile) => {
  fs.writeFileSync(
    routesConfigFile,
    JSON.stringify(
      data
      .map(item => ({
        name: item.name,
        path: item.name.toLowerCase() === 'home' ? '/' : `/${item.name.upperCamelCaseToSlugCase()}`,
        extension: item.extension,
      })),
      null,
      2
    )
  )
}

const createPageConfigFiles = (data, pageConfigFolder) => {
  data
  .forEach(({ name }) => {
    const absolutePath = `${pageConfigFolder}/${name.upperCamelCaseToLowerCamelCase()}.js`
    !fs.pathExistsSync(absolutePath) && fs.writeFileSync(absolutePath, `import React from 'react'\n\nexport default {}`)
  })
}