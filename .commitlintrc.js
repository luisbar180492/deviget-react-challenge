module.exports = {
  rules: {
		'header-max-length': [2, 'always', 100],// Max length of type+scope+subject
		'header-case': [2, 'always', 'lower-case'],// Only lower case on type, scope and subject
		'header-full-stop': [2, 'never', '.'],// Not dot at the end
		'type-empty': [2, 'never'],// Not empty
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'revert',
				'build',
				'ci',
				'wip',
				'merge',
				'other',
			]
		],// Only these values
		'scope-empty': [0, 'never'],// Empty
		'subject-empty': [2, 'never'],// Not empty
		'body-leading-blank': [2, 'always'],// Empty line before body
		'body-max-line-length': [2, 'always', 100],// Max length of each line of the body
		'footer-leading-blank': [2, 'always'],// Empty line before footer
	}
};