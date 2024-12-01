const Dotenv = require("dotenv-webpack");

module.exports = {
  // outras configurações
  plugins: [new Dotenv()],
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
};
