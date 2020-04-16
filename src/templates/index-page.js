import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import ImageGallery from 'react-image-gallery'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const IndexPageTemplate = ({
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
            <div
                className="flex text-white justify-center page-img relative"
                >
                <ImageGallery className="pt-12" items={images} showThumbnails={false} showPlayButton={false} showBullets={true} autoPlay={true} slideDuration={1000} slideInterval={8000}/>
                <div className="flex flex-col text-center absolute" style={{alignItems: 'center',webkitBoxPack: 'center',msFlexPack: 'center',justifyContent: 'center',height: '100%'}}>
                    <h1
                        className="text-5xl py-4 px-3"
                        >
                        {title}
                    </h1>
                    <h3
                        className="text-sm py-8">
                        {subheading}
                    </h3>
                    <hr className="header-underline"></hr>
                    <div className="py-2">
                        Välkommen!
                    </div>
                </div>
                
            </div>
            <section>
                <div>

                </div>
            </section>
            <section className="flex justify-center">
                <div className="flex-1 max-w-full">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="flex justify-center px-3">
                                        <div className="mb-6 lg:mb-12 container">
                                            <div className="text-center pt-8">
                                                <h1 className="text-4xl">{mainpitch.title}</h1>
                                            </div>
                                            <div className="flex justify-center text-center pt-4 pb-8">
                                                <h3 className="max-w-4xl xl:max-w-6xl">{mainpitch.description}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="columns">
                                        <div className="column is-12">
                                            <h3 className="has-text-weight-semibold is-size-2">
                                                {heading}
                                            </h3>
                                            <p>{description}</p>
                                        </div>
                                    </div> */}
                                    <div className="flex justify-center px-3">
                                        <Features gridItems={intro.blurbs} />
                                    </div>
                                    <div className="flex justify-center px-3">
                                        <div className="container">
                                            <div className="">
                                                
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="flex justify-center px-3 bg-gray-100 pb-12">
                                        <div className="container mdm:px-4">
                                            <h1 className="text-center py-12">
                                                Anslagstavla
                                            </h1>
                                            <BlogRoll />
                                            <div className="pt-4">
                                                <Link className="btn" to="/blog">
                                                    Läs mer
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

IndexPageTemplate.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({ data }) => {
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
            <IndexPageTemplate
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

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
            relation
          }
          heading
          description
        }
      }
    }
  }
`


