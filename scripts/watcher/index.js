require('./bootScripts')
const chokidar = require('chokidar')
const routesListener = require('./listeners/routesListener')
const languagesListener = require('./listeners/languagesListeners')
const {
  PUBLIC_PAGES_FOLDER,
  PUBLIC_PAGES_CONFIG_FOLDER,
  PUBLIC_ROUTES_CONFIG_FILE,
  PRIVATE_PAGES_FOLDER,
  PRIVATE_PAGES_CONFIG_FOLDER,
  PRIVATE_ROUTES_CONFIG_FILE,
  ROUTES_EXCLUDED_FILES,
  LANGUAGES_FOLDER,
  LANGUAGES_EXCLUDED_FILES,
} = require('./config/constants')

const publicRouterListener = routesListener.execute(
  PUBLIC_PAGES_FOLDER,
  PUBLIC_PAGES_CONFIG_FOLDER,
  PUBLIC_ROUTES_CONFIG_FILE,
  ROUTES_EXCLUDED_FILES,
)
const privateRouterListener = routesListener.execute(
  PRIVATE_PAGES_FOLDER,
  PRIVATE_PAGES_CONFIG_FOLDER,
  PRIVATE_ROUTES_CONFIG_FILE,
  ROUTES_EXCLUDED_FILES,
)

chokidar.watch(PUBLIC_PAGES_FOLDER, {})
.on('add', publicRouterListener)
.on('change', publicRouterListener)
.on('unlink', publicRouterListener)
chokidar.watch(PRIVATE_PAGES_FOLDER, {})
.on('add', privateRouterListener)
.on('change', privateRouterListener)
.on('unlink', privateRouterListener)
chokidar.watch(LANGUAGES_FOLDER, {
  ignored: /.js$/,
})
.on('add', languagesListener.execute(LANGUAGES_FOLDER, LANGUAGES_EXCLUDED_FILES))
.on('change', languagesListener.execute(LANGUAGES_FOLDER, LANGUAGES_EXCLUDED_FILES))
.on('unlink', languagesListener.execute(LANGUAGES_FOLDER, LANGUAGES_EXCLUDED_FILES))
