module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: 'src/pages/home/main.js',
            // the source template
            template: 'public/index.html',
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
            filename: 'about.html',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        },
        prices: {
            // entry for the page
            entry: 'src/pages/prices/main.js',
            // the source template
            template: 'public/prices.html',
            // output as dist/index.html
            filename: 'prices.html',
            chunks: ['chunk-vendors', 'chunk-common', 'prices']
        },
        examples: {
            // entry for the page
            entry: 'src/pages/examples/main.js',
            // the source template
            template: 'public/examples.html',
            // output as dist/index.html
            filename: 'examples.html',
            chunks: ['chunk-vendors', 'chunk-common', 'examples']
        }
    }
};