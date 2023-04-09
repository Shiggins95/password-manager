module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    'react-native-reanimated/plugin',
    'macros',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-class-properties',
  ],
};
