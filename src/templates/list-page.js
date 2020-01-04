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
    files,
}) => {
    const PageContent = contentComponent || Content
    return (
        <section className="flex flex-col pb-12">
            <h1 className="text-center md:pb-4 mdm:py-4 md:pt-18 bg-page-header bg-blue-200">{title}</h1>
            <div className="flex justify-center pt-12">
                <div className="container flex-row flex">
                    <div className="hidden md:flex px-3 pb-12 w-1/4">
                        <SideNav />
                    </div>
                    <div className="flex-1 px-3">
                        {helmet || ''}
                        <p>{description}</p>
                        <PageContent content={content} />
                        <div className="flex flex-wrap">
                            {files &&
                            files.map(({ file }) => (
                                <a href={file.publicURL} className="flex flex-col items-center p-2">
                                    <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="48" width="48">
                                        <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"/>
                                        <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"/>
                                        <g fill="#1976D2">
                                            <rect x="16" y="21" width="17" height="2"/>
                                            <rect x="16" y="25" width="13" height="2"/>
                                            <rect x="16" y="29" width="17" height="2"/>
                                            <rect x="16" y="33" width="13" height="2"/>
                                        </g>
                                    </svg>
                                    <span>{file.name}</span>
                                </a>
                            ))}
                        </div>
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
    console.log(post.frontmatter.docloader);

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
                files={post.frontmatter.docloader}
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
        docloader {
            file {
                name
                publicURL
            }
        }
    }
  }
}
`;