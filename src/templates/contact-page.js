import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



import Layout from '../components/Layout'

export const ContactPageTemplate = ({
    content,
    contentComponent,
    title,
}) => {
    const ContactContent = contentComponent || Content
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
    }

    const handleSubmit = e => {
        e.preventDefault()
        const uri = 'subject=' + document.getElementById('subject').value + '&body=' + document.getElementById('message').value
        window.open('mailto:mailexample@example.com?' + uri);
    }
    return (
        <section className="flex flex-col pb-12">
            <h1 className="text-center md:pb-4 mdm:py-4 md:pt-18 bg-page-header bg-blue-1000">{title}</h1>
            <div className="flex justify-center pt-12">
                <div className="container flex-col flex">
                    <ContactContent content={content} className={''} />
                    <section className="section contact-form mx-auto w-2/4">
                        <div className="container">
                            <div className="content">
                                <form
                                    name="contact"
                                    method="post"
                                    action="/contact/thanks/"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={handleSubmit}>
                                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                    <div className="p-6">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div hidden>
                                            <label>
                                                Don’t fill this out:{' '}
                                                <input name="bot-field" />
                                            </label>
                                        </div>
                                        <div className="field pb-1 mb-8 mt-4 w-2/4 mx-auto border-b">
                                            <div className="control">
                                                <input
                                                    className="input w-full"
                                                    type={'text'}
                                                    name={'name'}
                                                    id={'name'}
                                                    required={true}
                                                    placeholder="Namn"
                                                />
                                            </div>
                                        </div>
                                        <div className="field pb-1 mb-8 w-2/4 mx-auto border-b">
                                            <div className="control">
                                                <input
                                                    className="input w-full"
                                                    type={'text'}
                                                    name={'subject'}
                                                    id={'subject'}
                                                    required={true}
                                                    placeholder="Ämne"
                                                />
                                            </div>
                                        </div>
                                        <div className="field pb-1 mb-8 w-2/4 mx-auto border-b">
                                            <div className="control">
                                                <input
                                                    className="input w-full"
                                                    type={'email'}
                                                    name={'email'}
                                                    id={'email'}
                                                    required={true}
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="field pb-1 mb-8 w-2/4 mx-auto border-b">
                                            <div className="control">
                                                <textarea
                                                    className="textarea w-full"
                                                    name={'message'}
                                                    id={'message'}
                                                    required={true}
                                                    placeholder="Meddelande"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field p-10 text-center bg-blue-1000 text-white">
                                        <button className="button is-link" type="submit">
                                            SKICKA
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

ContactPageTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const ContactPage = ({ data }) => {
    const { markdownRemark: contact } = data
    return (
        <Layout>
            <ContactPageTemplate
                title={contact.frontmatter.title}
                content={contact.html}
                heading={contact.frontmatter.heading}
                contentComponent={HTMLContent}
            />
        </Layout>
    )
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    }),
}

export default ContactPage

export const ContactPageQuery = graphql`
query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
            title
            heading
            
        }
  }
}
`
