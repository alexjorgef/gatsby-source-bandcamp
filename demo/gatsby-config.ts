import "dotenv/config"
import type { GatsbyConfig, PluginRef } from "gatsby"
import type { BandcampPluginOptions } from "@alexjorgef/gatsby-source-bandcamp"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `@alexjorgef/gatsby-source-bandcamp`,
    siteUrl: `https://github.com/alexjorgef/gatsby-source-bandcamp/`,
  },
  jsxRuntime: `automatic`,
  graphqlTypegen: {
    generateOnBuild: true,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-bandcamp`,
      options: {
        username: process.env.username,
      } as BandcampPluginOptions,
    },
  ] as PluginRef[],
}

export default config
