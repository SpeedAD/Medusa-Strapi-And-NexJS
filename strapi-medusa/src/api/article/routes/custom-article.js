module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/articles',
        handler: 'article.find',
      },
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/article/:slug',
        handler: 'article.findOne',
      },
    ]
}