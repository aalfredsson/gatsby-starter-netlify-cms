import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import ImageGallery from 'react-image-gallery'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const ContactPageTemplate = ({
    images,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
    test,
}) => (
        <div>
            Hejsan
        </div>
    )

    ContactPageTemplate.propTypes = {

}

const ContactPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const images = frontmatter.images.map(image => {
        console.log(image);
        return {
            original: image.image.childImageSharp.fluid.src,
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            sizes: '80vh'
        };
    })
    return (
        <Layout>
            <ContactPageTemplate
                images={images}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        images {
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            textheading
            text
          }
          heading
          description
        }
      }
    }
  }
`
