module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature',
    },
    {
      value: 'fix',
      name: 'fix: A bug fix',
    },
    {
      value: 'docs',
      name: 'docs: Documentation only changes',
    },
    {
      value: 'style',
      name:
        'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test: Adding missing tests',
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit',
    },
    {
      value: 'build',
      name: 'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    {
      value: 'ci',
      name: 'ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    },
    {
      value: 'wip',
      name: 'wip: Work in progress',
    },
    {
      value: 'merge',
      name: 'merge: Merge by conflict or by another reason',
    },
    {
      value: 'other',
      name: 'other: Other',
    },
  ],
  messages: {
    type: "Select the type of change that you're committing:\n",
    customScope: 'Denote the scope (module, component, file or files):\n',
    subject: 'Short description:\n',
    body: 'Provide a longer description of the change. Use "|" to break new line:\n',
    footer: 'Id of task(s) closed:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  subjectLimit: 100,
  footerPrefix: 'Task(s) closed:',
  allowBreakingChanges: ['fix', 'feat'],
};
