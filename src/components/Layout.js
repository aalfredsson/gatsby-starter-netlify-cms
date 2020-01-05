import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/style.css'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="sv" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="housing-cooperative"
          sizes="180x180"
          href="/img/housingcooperative_white.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/housingcooperative_white.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/housingcooperative_white.png"
          sizes="16x16"
          color="#fff"
        />

        <link
          rel="mask-icon"
          href="/img/housingcooperative.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
