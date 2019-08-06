require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `headhunt`,
    siteTitleAlt: `headhunt | Home`,
    siteHeadline: `headhunt - crypto recruiment agency`,
    siteUrl: `https://headhunt-btc.com`,
    siteDescription: `A disruptive recruitment agency specialized in the blockchain (DLT) industry.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `r153r`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `headhunt-btc`,
        short_name: `headhunt`,
        description: `A disruptive recruitment agency specialized in the blockchain (DLT) industry.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Lekton`,
					`source sans pro\:400`
				],
				display: 'swap'
			}
		},
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
