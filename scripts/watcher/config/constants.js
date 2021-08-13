const path = require('path')
// Router
exports.PUBLIC_PAGES_FOLDER = path.resolve(__dirname, '../../../src/components/pages/public')
exports.PUBLIC_PAGES_CONFIG_FOLDER = path.resolve(__dirname, '../../../src/components/pages/public/config')
exports.PUBLIC_ROUTES_CONFIG_FILE = path.resolve(__dirname, '../../../src/routes/config/publicPages.json')
exports.PRIVATE_PAGES_FOLDER = path.resolve(__dirname, '../../../src/components/pages/private')
exports.PRIVATE_PAGES_CONFIG_FOLDER = path.resolve(__dirname, '../../../src/components/pages/private/config')
exports.PRIVATE_ROUTES_CONFIG_FILE = path.resolve(__dirname, '../../../src/routes/config/privatePages.json')
exports.ROUTES_EXCLUDED_FILES = ['NotFound.jsx', 'Splash.jsx']
// Internationalization
exports.LANGUAGES_FOLDER = path.resolve(__dirname, '../../../src/internationalization/languages')
exports.LANGUAGES_EXCLUDED_FILES = ['index.js']