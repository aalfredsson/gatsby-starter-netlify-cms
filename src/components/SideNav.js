import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SideNav extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul>
        {posts &&
        posts.map(({ node: post }) => (
            <li className="">
                <Link
                    className="hover:translate-r-2px transition-fast hover:text-gray-900 text-gray-600 font-medium px-2 -mx-2 py-1 block"
                    to={post.fields.slug}
                    activeClassName="translate-r-2px text-gray-900"
                >
                    {post.frontmatter.menuitem}
                </Link>
          </li>
        ))}
      </ul>
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

