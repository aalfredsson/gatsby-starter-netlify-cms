import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent, firstImage }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="">
        <h1 className="text-center md:pb-12 mdm:py-12 md:pt-24 bg-page-header">
            {title}
        </h1>
        <div className=" flex justify-center">
            
            <div className="container">
                <div className="">
                    <div className="flex flex-col lg:flex-row pt-12 ">
                        <PageContent className="flex flex-col flex-1 pl-3 pr-8 lgm:pb-12 justify-center" content={content} />
                        <div
                            className="flex text-white justify-center pr-3 pl-8 flex-1">
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
