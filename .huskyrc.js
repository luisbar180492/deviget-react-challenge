module.exports = {
  'hooks': {
    'pre-commit': 'export DEBUG=lint-staged* && lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};