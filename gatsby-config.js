const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Kenzie Academy Brazil`,
    siteUrl: `https://kenzie.com.br`,
    description: `Comece aqui sua carreira em tecnologia!`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenzie Academy Brazil`,
        short_name: `KenzieBR`,
        start_url: `/`,
        background_color: `#1c3869`,
        theme_color: `#1c3869`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@layout": path.resolve(__dirname, "src/layout"),
          "@sections": path.resolve(__dirname, "src/components/sections"),
          "@icons": path.resolve(__dirname, "src/components/icons"),
          "@styles": path.resolve(__dirname, "src/assets/styles"),
          "@images": path.resolve(__dirname, "src/assets/images"),
          "@utils": path.resolve(__dirname, "src/utils")
        },
        extensions: ["js"]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-150590368-1", // Google Analytics / GA
          "AW-700277406" // Google Ads / Adwords / AW
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NB5L2PM"
      }
    }
  ]
};
