module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'upd',
        'feat',
        'fix',
        'refactor',
        'docs',
        'chore',
        'style',
        'revert',
        'build',
        'ci',
        'style',
        'test',
        'perf'
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    // scope 和 subject 之间必须有空格，比如： fix(scope): subject
    'scope-case': [0, 'always', 'lowerCase'],
    'subject-full-stop': [2, 'never'],
    'subject-case': [0, 'always'],
    'header-max-length': [2, 'always', 500],
  },
}
