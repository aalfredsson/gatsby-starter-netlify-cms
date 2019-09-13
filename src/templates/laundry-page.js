import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const LaundryPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => (
  <div className="">
     <div className="">
        <h1 className="text-center md:pb-4 mdm:py-4 md:pt-18 bg-page-header bg-blue-200">
            {title}
        </h1>
        <div className=" flex justify-center">
            
            <div className="container px-3">
                <p className="px-12 py-6">{description}</p>

            </div>

        </div>
    </div>
  </div>
)

LaundryPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

const LaundryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LaundryPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

LaundryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LaundryPage

export const laundryPageQuery = graphql`
  query LaundryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
