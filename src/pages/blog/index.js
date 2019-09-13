import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0 pb-12"
        >
          <h1
            className="text-center text-2xl md:pb-4 mdm:py-4 md:pt-18 bg-page-header bg-blue-200"
          >
            Latest Stories
          </h1>
        </div>
        <section className="section flex justify-center py-6">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
