import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const ListsPage = ( {data} ) => {
    const { markdownRemark: post } = data;

    return(
      <div className="section">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{post.frontmatter.title}</h2>
        <p>{post.frontmatter.description}</p>
      </div>
    );
};

export default ListsPage;

export const ListsPageQuery = graphql`
query ListsPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      templateKey
      description
    }
  }
}
`;