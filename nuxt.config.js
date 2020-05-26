import Mode from 'frontmatter-markdown-loader/mode'
var hljs = require('highlight.js')
const path = require('path')
var fs = require('fs')

var contentDir = path.join(__dirname, '/content/posts')
var contentFiles = fs.readdirSync(contentDir)
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/blog/'
  }
} : {}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css'
      },
      { rel: 'stylesheet', href: '/fontello/css/blogicons.css' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  generate: {
    routes() {
      return contentFiles.map(filename => {
        
        return {
          route: `/posts/${path.basename(filename, '.md')}`,
          payload: fs.readFileSync(path.join(contentDir, filename))
        }
      })
    }
  },
  ...routerBase,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META,Mode.HTML],
          markdownIt: {
            html: true,
            highlight: function(str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (__) {}
              }

              return '' // use external default escaping
            }
          }
        }
      })
    }
  }
}
