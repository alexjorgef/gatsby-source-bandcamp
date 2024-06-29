import type { GatsbyNode } from "gatsby"
import bandcamp from "@alexjorgef/bandcamp-scraper"
import { promisify } from "util"
import { ERROR_CODES, NODE_TYPE_BASE, NODE_SUBTYPE_USER } from "./constants"
import type { BandcampNodePluginOptions } from "./types/plugin-options"

export const sourceNodes: GatsbyNode["sourceNodes"] = async (gatsbyApi, pluginOptions: BandcampNodePluginOptions) => {
  const { username } = pluginOptions

  let getProfileFollowsPromisse
  try {
    getProfileFollowsPromisse = promisify(bandcamp.getProfileFollows)
  } catch (error) {
    gatsbyApi.reporter.panicOnBuild({
      id: ERROR_CODES.createBandcampUser,
      context: {
        sourceMessage: error.message,
        username,
      },
    })
  }

  const follows = await getProfileFollowsPromisse(username)

  follows.profileFollows.forEach(async (follow) => {
    await gatsbyApi.actions.createNode({
      ...follow,
      id: gatsbyApi.createNodeId(`${NODE_TYPE_BASE}${NODE_SUBTYPE_USER}-${follow.title}`),
      parent: null,
      children: [],
      internal: {
        type: `${NODE_TYPE_BASE}${NODE_SUBTYPE_USER}`,
        content: JSON.stringify(follow),
        contentDigest: gatsbyApi.createContentDigest(follow),
      },
    })
  })
}
