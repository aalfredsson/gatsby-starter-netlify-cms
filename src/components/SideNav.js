import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SideNav extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="flex flex-col">
        {posts &&
        posts.map(({ node: post }) => (
            <li>
                <Link
                    className=" font-semibold"
                    to={post.fields.slug}
                />
                {post.frontmatter.menuitem}
          </li>
        ))}
      </div>
    )
  }
}

SideNav.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SideNavQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "list-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                menuitem
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SideNav data={data} count={count} />}
  />
)

