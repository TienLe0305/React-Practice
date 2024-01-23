const path = require("path");

module.exports = {
  // ... các cấu hình khác của webpack

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules\/@atlaskit\/analytics-next-stable-react-context/,
      },
    ],
  },
};
