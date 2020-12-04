
module.exports = {
    siteMetadata:{
    title:"Aleksi Immonen personal website",
    description: "Founder, hacker, creative",
    titleTemplate: "%s",
    author:"@aleksimmonen",
    twitterUsername:"@aleksimmonen",
    image:"",
    url:"https://www.aleksiimmonen.com",
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
          {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ "Ubuntu", "Lora", "Permanent Marker"],
        display: "swap",
      },
    },

    {
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
          },
                    {
            family: `Lora`,
          },
          {
            family: `Permanent Marker`,
          },
        ],
      },
    }
  ],
}
