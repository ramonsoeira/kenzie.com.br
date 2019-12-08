const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Kenzie Academy Brazil`,
    siteUrl: `https://kenzie.com.br`,
    description: `Comece aqui sua carreira em tecnologia!`,
    pathPrefix: `/kenzie.com.br`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@layout": path.resolve(__dirname, "src/layout"),
          "@sections": path.resolve(__dirname, "src/components/sections"),
          "@icons": path.resolve(__dirname, "src/components/icons"),
          "@styles": path.resolve(__dirname, "src/assets/styles"),
          "@images": path.resolve(__dirname, "src/assets/images")
        },
        extensions: ["js"]
      }
    }
  ]
};
