const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');


// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};



exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/static-page.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            });

            // result.data.allSpectacleHtml.edges.forEach(({ node }) => {
            //     createPage({
            //         path: 'api-v1',
            //         component: path.resolve('./src/templates/spectacle-html-page.js')
            //     });
            // });

            resolve();
        });
    });
};