const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [
        { src: 'assets/var.less', lang: 'less' },
        { src: 'assets/main.less', lang: 'less' }

    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/iview', ssr: true }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        //'@gauseen/nuxt-proxy',
    ],
    /*
     ** Axios module configuration
     */
    axios: {

    },
    proxyTable: {
        //'/api': { target: 'http://localhost:30011/api', ws: false }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    }
}
