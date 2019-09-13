import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="flex flex-col md:flex-row md:flex-wrap justify-around mdm:px-6">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} className="w-full md:w-2/5 lg:w-1/5 md:mx-3 mb-6 blog-list-container md:md-blog-list-container" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification p-8 h-full flex flex-col ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="pb-2">
                  
                  <p className="post-meta flex flex-col">
                    <span
                      className=" font-semibold"
                    >
                      {post.frontmatter.title}
                    </span>
                    <span className="text-sm italic">
                        {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <div>
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
                  
                </div>
                <div className="button mt-auto">
                    Keep Reading →
                </div>
              </article>
            </Link>
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
