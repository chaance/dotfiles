module.exports = {
  extends: [
    '@chancedigital/eslint-config/jest',
    '@chancedigital/eslint-config/react',
    // Remove if not using TypeScript
    '@chancedigital/eslint-config/typescript',
  ],
  rules: {
    // can conflict with Next.js Link API
    // Remove this if not using Next.js
    'jsx-a11y/anchor-is-valid': ['never'],
  },
};
