// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'

    ],
    ssr: true,
    runtimeConfig: {
        public:{
            serverURL: "http://localhost:3001" // URL of your local server
        }
    },
    app: {
        // Checking environment variable to decide whether the link 
        baseURL: '/test',  // Name of your GitHub Repository
        head: {
          title: 'Venture Innovative',
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          meta: [
                {
                    name: 'description',
                    content: 'Venture Innovative capital web-site, we invest in 3 main areas: Economy, Tourism, Healthcare'
                },
                {
                    name: 'keywords',
                    content: 'Venture, Innovative, VC, people, projects, areas, about, contact, economy, healthcare, tourism'
                },
                {
                    name: 'lang',
                    content: 'en'
                },
                {
                    name: 'authors',
                    content: 'Niccolò Donadini, Samuele Marchioni, Filippo Monti'
                },
          ]
        }
    }
})  
