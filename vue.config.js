module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: 'src/pages/home/main.js',
            // the source template
            template: 'public/index',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'Title home page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        about: {
            // entry for the page
            entry: 'src/pages/about/main.js',
            // the source template
            template: 'public/about.html',
            // output as dist/index.html
            filename: 'about/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        },
        prices: {
            // entry for the page
            entry: 'src/pages/prices/main.js',
            // the source template
            template: 'public/prices.html',
            // output as dist/index.html
            filename: 'prices/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'prices']
        },
        examples: {
            // entry for the page
            entry: 'src/pages/examples/main.js',
            // the source template
            template: 'public/examples.html',
            // output as dist/index.html
            filename: 'examples/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'examples']
        },
        landingPage: {
            // entry for the page
            entry: 'src/pages/landing-page/main.js',
            // the source template
            template: 'public/landing-page.html',
            // output as dist/index.html
            filename: 'landing-page/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'landingPage']
        },
        multiPage: {
            // entry for the page
            entry: 'src/pages/multi-page/main.js',
            // the source template
            template: 'public/multi-page.html',
            // output as dist/index.html
            filename: 'multi-page/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'multiPage']
        },
        webApp: {
            // entry for the page
            entry: 'src/pages/web-app/main.js',
            // the source template
            template: 'public/web-app.html',
            // output as dist/index.html
            filename: 'web-app/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'webApp']
        },
        contacts: {
            // entry for the page
            entry: 'src/pages/contacts/main.js',
            // the source template
            template: 'public/contacts.html',
            // output as dist/index.html
            filename: 'contacts/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'contacts']
        },
        'how-to-become-a-developer': {
            // entry for the page
            entry: 'src/pages/how-to-become-a-developer/main.js',
            // the source template
            template: 'public/how-to-become-a-developer.html',
            // output as dist/index.html
            filename: 'how-to-become-a-developer/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'how-to-become-a-developer']
        }
    }
};