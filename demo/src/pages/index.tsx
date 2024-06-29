/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { graphql } from "gatsby"
import * as React from "react"

const BandcampUserLists = ({ userPlaylists }) => (
  <React.Fragment>
    {userPlaylists.map((p) => {
      if (!p.title) return null

      return (
        <React.Fragment key={p.title}>
          <h2>{p.title}</h2>
          <div className="img-grid">
            <figure key={p.artist}>
              <img loading="lazy" alt={p.artist} src={p.img} />
            </figure>
          </div>
          <p>Artist: {p.artist}</p>
          <p>URL: {p.url}</p>
          <p>Image: {p.img}</p>
          {/* <p>ID: {p.id}</p>
          <p>Key: {p.key}</p>
          <p>URL: {p.url}</p>
          <p>Created Time: {p.created_time}</p>
          <p>Updated Time: {p.updated_time}</p>
          <p>Play count: {p.play_count}</p>
          <p>Favorite count: {p.favorite_count}</p>
          <p>Comment count: {p.comment_count}</p>
          <p>Listener count: {p.listener_count}</p>
          <p>Repost count: {p.repost_count}</p>
          <p>Slug: {p.slug}</p>
          <p>Audio Length: {p.audio_length}</p>
          <p>Type: {p.type}</p>
          <p>Tags: {JSON.stringify(p.tags)}</p>
          <p>Pictures: {JSON.stringify(p.pictures)}</p>
          <p>User: {JSON.stringify(p.user)}</p> */}
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

const IndexPage = ({ data: { allBandcampUser } }: { data: Queries.IndexPageQuery }) => (
  <div className="wrapper">
    <main>
      <h1>@alexjorgef/gatsby-source-bandcamp</h1>
      <p>
        The user has <b>{allBandcampUser.totalCount}</b> wishlist on Bandcamp
      </p>
      {allBandcampUser.nodes &&
        (allBandcampUser.nodes.length > 0 ? (
          <BandcampUserLists userPlaylists={allBandcampUser.nodes} />
        ) : (
          <p>No playlists found</p>
        ))}
    </main>
    <footer>
      Demo of @alexjorgef/gatsby-source-bandcamp –{` `}
      <a href="https://www.github.com/alexjorgef/gatsby-source-bandcamp">GitHub</a>
      {` `}– <a href="https://www.alexjorgef.com">Website</a>
    </footer>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allBandcampUser {
      totalCount
      nodes {
        title
        artist
        url
        img
      }
    }
  }
`

export const Head = () => (
  <>
    <title>@alexjorgef/gatsby-source-bandcamp</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎨</text></svg>"
    />
  </>
)
