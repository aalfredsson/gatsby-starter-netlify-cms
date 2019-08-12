import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent, firstImage }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="">
        <h2 className="text-center text-2xl pb-12 pt-24 bg-page-header">
            {title}
        </h2>
        <div className=" flex justify-center">
            
            <div className="container">
            <div className="">
                <div className="flex-col md:flex-row pt-12 ">
                    <PageContent className="flex flex-col flex-1 px-8 justify-center" content={content} />
                    <div
                        className="flex text-white justify-center px-8 flex-1">
                            <img src={!!firstImage && !!firstImage.childImageSharp ? firstImage.childImageSharp.fluid.src : firstImage}></img>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        firstImage={post.frontmatter.bodyimage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bodyimage {
            childImageSharp {
              fluid(maxWidth: 980, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`
