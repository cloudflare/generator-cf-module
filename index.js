'use strict';

module.exports = {
  app: require.resolve('./generators/app'),
  babel: require.resolve('./generators/babel'),
  eslint: require.resolve('./generators/eslint'),
  git: require.resolve('./generators/git'),
  jsfmt: require.resolve('./generators/jsfmt'),
  karma: require.resolve('./generators/karma'),
  license: require.resolve('./generators/license'),
  npm: require.resolve('./generators/npm'),
  react: require.resolve('./generators/react'),
  readme: require.resolve('./generators/readme'),
  src: require.resolve('./generators/src'),
  test: require.resolve('./generators/test'),
};
