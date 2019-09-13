import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const LaundryPageTemplate = ({
  image,
  title,
  heading,
  description,
  iosurl,
  androidurl,
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
                <br></br>
                <br></br>
                <br></br>
                <Link to="https://apps.apple.com/se/app/electrolux-vision-mobile/id880022671?mt=8"
                style={{
                    display:'inline-block',
                    overflow:'hidden',
                    background:'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2014-06-12&kind=iossoftware&bubble=apple_music) no-repeat',
                    width:'135px',
                    height:'40px'
                    }}></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.electrolux.visionmobile&hl=sv&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" 
                style={{
                    display:'inline-block',
                    overflow:'hidden',
                    backgroundImage:'url(https://play.google.com/intl/en_us/badges/images/generic/sv_badge_web_generic.png)',
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    width:'135px',
                    height:'40px'
                    }}></Link>
                
            </div>

        </div>
    </div>
  </div>
)

LaundryPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iosurl: PropTypes.string,
  androidurl: PropTypes.string
}

const LaundryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LaundryPageTemplate
        title={frontmatter.title}
        description={frontmatter.descriptio}
        iosurl={frontmatter.iosurl}
        androidurl={frontmatter.androidurl}
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
  query LaundryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`
