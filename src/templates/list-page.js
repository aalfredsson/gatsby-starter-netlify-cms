import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SideNav from '../components/SideNav'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const ListsPage = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
  }) => {
    const PageContent = contentComponent || Content
    return(
    <section className="flex flex-col">
        <h2 className="text-center text-2xl pb-12 pt-24 bg-page-header">{title}</h2>
        <div className="flex justify-center pt-12">
            <div className="container flex-row flex">
                <div className="flex">
                    <SideNav/>
                </div>
                <div className="flex-1 text-center ">
                    {helmet || ''}
                    <p>{description}</p>
                    <PageContent content={content} />
                </div>
            </div>
        </div>
    </section>
    );
};

ListsPage.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
  }

const PagePost = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <ListsPage
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </Layout>
    )
  }

export default PagePost;

export const ListsPageQuery = graphql`
query ListsPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      templateKey
      description
    }
  }
}
`;