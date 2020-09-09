module.exports = {
  siteUrl: "https://gatsby.interseksi.com", // Site domain. Do not include a trailing slash!

  postsPerPage: 10, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "Gatsby - Interseksi Development", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "Lightning fast, secure front-end for your WordPress", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Gatsby - Interseksi", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://developer.interseksi.com",
  subscribeWidget: {
    visible: false,
    title: "Subscribe to Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://gatsby.interseksi.com/",
      },
      {
        label: "Contact",
        url: "https://gatsby.interseksi.com/contact",
      },
    ],
  },
  footer: {
    copyright: "Gatsby - Interseksi",
    navigation: [
      {
        label: "Home",
        url: "https://gatsby.interseksi.com/",
      },
      {
        label: "Sitemap",
        url: "https://gatsby.interseksi.com/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://gatsby.interseksi.com/rss.xml",
      },
      {
        label: "Contact",
        url: "https://gatsby.interseksi.com/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/alfattahdaeng",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Gatsby - Interseksi",
    description:
      "Lightning fast, secure front-end for your WordPress.",
  },
  twitterCard: {
    title: "Gatsby - Interseksi",
    description:
      "Lightning fast, secure front-end for your WordPress.",
    imageUrl: "twitterImage.png",
    username: "@twitter",
  },
  facebookCard: {
    title: "Gatsby - Interseksi",
    description:
      "Lightning fast, secure front-end for your WordPress.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "Gatsby - Interseksi",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ]
  }
};
