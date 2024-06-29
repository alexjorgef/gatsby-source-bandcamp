import type { GatsbyNode } from "gatsby"
import type { ObjectSchema } from "gatsby-plugin-utils"

const wrapOptions = (innerOptions) => `{
  resolve: \`@alexjorgef/gatsby-source-bandcamp\`,
  options: {
    ${innerOptions.trim()}
  },
}
`

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
  Joi.object({
    username: Joi.string()
      .required()
      .description(`The Bandcamp username to fetch.`)
      .meta({ example: wrapOptions(`username: \`alexjorgef\`,`) }),
  })
