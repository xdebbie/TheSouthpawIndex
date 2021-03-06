'use strict'

module.exports = {
    siteMetadata: {
        title: 'gatsby-starter-typescript-plus',
        description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
        keywords: 'gatsbyjs, gatsby, javascript, sample, something',
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
        author: {
            name: 'xdebbie',
            url: 'https://twitter.com/debishot',
            email: ''
        }
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        'gatsby-plugin-dark-mode',
        'gatsby-plugin-emotion',
        'gatsby-plugin-typescript',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet'
    ]
}
