import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="flex flex-col md:flex-row">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="flex-1 mr-6 md:mb-0 mb-6" style={{boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)', borderRadius: '2px', backgroundColor: '#FFFFFF'}} key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification p-8 ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="pb-2">
                  
                  <p className="post-meta flex flex-col">
                    <Link
                      className=" font-semibold"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="text-sm italic">
                        {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                    <span>
                        {post.excerpt}
                    </span>
                    {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail pt-2">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 50)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
