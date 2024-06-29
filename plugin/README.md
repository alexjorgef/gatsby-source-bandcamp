# @alexjorgef/gatsby-source-bandcamp

Source playlists from [Bandcamp](https://www.bandcamp.com/) into [Gatsby](https://www.gatsbyjs.com/).

## Install

```shell
npm install @alexjorgef/gatsby-source-bandcamp
```

## How to use

Add the plugin to your `gatsby-config` file:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-bandcamp`,
      options: {}
    }
  ]
}
```

## Plugin Options

- [@alexjorgef/gatsby-source-bandcamp](#alexjorgefgatsby-source-bandcamp)
  - [Install](#install)
  - [How to use](#how-to-use)
  - [Plugin Options](#plugin-options)
    - [username (**required**)](#username-required)

### username (**required**)

The Bandcamp username to fetch.

**Field type**: `String`

```js
{
  resolve: `@alexjorgef/gatsby-source-bandcamp`,
  options: {
    username: `alexjorgef`,
  },
}
```
