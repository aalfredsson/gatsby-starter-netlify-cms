import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const LaundryPageTemplate = ({
    content,
    contentComponent,
  image,
  title,
  heading,
  iosurl,
  androidurl,
  intro,
  main,
}) => {
    const LaundryContent = contentComponent || Content
    return (
  <div className="">
     <div className="">
        <h1 className="text-center md:pb-4 mdm:py-4 md:pt-18 bg-page-header bg-blue-1000">
            {title}
        </h1>
        <div className=" flex justify-center">
            
            <div className="container px-3">
            <LaundryContent content={content} className={''} />

                <br></br>
                <br></br>
                <br></br>
                <a href={iosurl}
                style={{
                    display:'inline-block',
                    overflow:'hidden',
                    background:'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2014-06-12&kind=iossoftware&bubble=apple_music) no-repeat',
                    width:'135px',
                    height:'40px'
                    }}></a>
                <a href={androidurl}
                style={{
                    display:'inline-block',
                    overflow:'hidden',
                    backgroundImage:'url(https://play.google.com/intl/en_us/badges/images/generic/sv_badge_web_generic.png)',
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    width:'135px',
                    height:'40px'
                    }}></a>
                
            </div>

        </div>
    </div>
  </div>
)
}

LaundryPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    title: PropTypes.string,
    iosurl: PropTypes.string,
    androidurl: PropTypes.string
}

const LaundryPage = ({ data }) => {
  const { markdownRemark: laundry } = data

  return (
    <Layout>
      <LaundryPageTemplate
        content={laundry.html}
        contentComponent={HTMLContent}
        title={laundry.frontmatter.title}
        iosurl={laundry.frontmatter.iosurl}
        androidurl={laundry.frontmatter.androidurl}
      />
    </Layout>
  )
}

LaundryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }),
}

export default LaundryPage

export const laundryPageQuery = graphql`
  query LaundryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
            title
            iosurl
            androidurl
        }
    }
  }
`
