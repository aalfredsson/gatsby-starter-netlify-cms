import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subNavActiveClass: props.optional.subNavActiveClass,
        };
      }

      componentWillReceiveProps(nextProps) {
        this.setState({ subNavActiveClass: nextProps.optional.subNavActiveClass });  
      }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul className={`w-full pb-3 sub-nav ${this.state.subNavActiveClass}`}>
        {posts &&
        posts.map(({ node: post }) => (
            <li className="" key={post.id}>
                <Link
                    className="md:hover:translate-r-2px md:transition-fast md:hover:text-gray-900 md:text-gray-600 md:font-medium md:px-2 -mx-2 md:py-1 py-2 px-8 transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100"
                    to={post.fields.slug}
                    activeClassName="md:translate-r-2px md:text-gray-900 text-blue-500 mdm:bg-blue-100"
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

export default (optional) => (
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
    render={(data, count) => <SideNav data={data} count={count}  optional={optional} />}
  />
)

