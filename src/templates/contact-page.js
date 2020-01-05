import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import ImageGallery from 'react-image-gallery'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const ContactPageTemplate = ({
}) => (
        <div>
            Hejsan
        </div>
    )

    ContactPageTemplate.propTypes = {

}

const ContactPage = ({  }) => {
    return (
        <Layout>
            <ContactPageTemplate
            />
        </Layout>
    )
}



export default ContactPage
