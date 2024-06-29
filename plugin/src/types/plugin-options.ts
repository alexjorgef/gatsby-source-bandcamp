import type { IPluginRefOptions, PluginOptions as GatsbyPluginOptions } from "gatsby"

export interface BandcampPluginOptions extends IPluginRefOptions {
  username: string
}

export interface BandcampNodePluginOptions extends GatsbyPluginOptions {
  username: string
}
