module.exports = {
  // https://github.com/chancedigital/eslint-config
  extends: ['@chancedigital'],
  // Subset of my custom rules for different project types
  // extends: ['@chancedigital/eslint-config/react'],
  // extends: ['@chancedigital/eslint-config/typescript'],
  rules: {
    // Many routing libs/frameworks wrap a tags inside a Link tag, making this rule annoying.
    // I enable/disable it on a per-project basis depending on the need.
    // If you click something and it takes you to a new page, use an a tag with an href value.
    // If you click somehting and it does another thing, you probably need to use a button.
    'jsx-a11y/anchor-is-valid': ['never'],
  },
};
