const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Kenzie Academy Brazil`,
    siteUrl: `https://kenzie.com.br`,
    description: `Comece aqui sua carreira em tecnologia!`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150590368-1",
        //The pageview event is sending with Google Tag Manager
        exclude: ["/", "/quem-somos/", "/curriculo/", "/pagamento/"],
        head: true
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NB5L2PM"
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    }
  ]
};
