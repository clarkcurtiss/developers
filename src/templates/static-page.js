import React from 'react';

import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Layout>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        </div>
    );
};

export const query = graphql`
    query StaticPageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;