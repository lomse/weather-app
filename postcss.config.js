// postcss.config.js
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss-import"),
    tailwindcss("./src/tailwind.config.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.tsx"],
        safelist: ['html', 'body'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
