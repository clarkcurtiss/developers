module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/pages/`,
            },
        },
        // {
        //     resolve: `gatsby-source-spectacle-html`,
        //     options: {
        //         path: './src/spectacle/index.html'
        //     }
        // }
    ]
};