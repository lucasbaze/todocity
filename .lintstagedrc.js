module.exports = {
  '**/*.{js,jsx,ts,tsx}': [`eslint --fix`, `prettier --write`],
  // '**/*.{css,scss}': [`stylelint --fix`, `prettier --write`],
  '**/*.{css,scss}': [`prettier --write`],
  '*': [`prettier --write --ignore-unknown`],
};
