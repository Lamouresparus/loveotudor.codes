// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  siteName: ' Love Otudor',
  siteDescription: 'Mobile Development Blog by Love Otudor.',
  siteUrl: 'https://loveotudor.netlify.app',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },
  
  icon: {
    favicon: '~/src/favicon.png',
    favicon: './src/assets/images/favicons/favicon-16x16.png',
    touchicon: '~/src/favicon.png'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Love Otudor',
          description: 'A blog on mobile development, and my journey as woman in tech. Written by Love Otudor, Mobile Developer',
          feed_url: 'https://loveotudor.netlify.app/rss.xml',
          site_url: 'https://loveotudor.netlify.app'
        },
        feedItemOptions: node => ({
          title: node.title,
          date: node.date,
          url: 'https://loveotudor.netlify.app' + node.slug,
          description: node.description
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-138246929-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about-me': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
 
  {
    use: "gridsome-plugin-manifest",
    options: {
        background_color: "##54d154",
        icon_path: "./src/assets/images/manifest.png",
        name: "Love Otudor Codes",
        short_name: "Love Otudor",
        theme_color: "#000000",
        lang: "en",
    },
},

    
 ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}

