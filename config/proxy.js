export default {
    '/api/': {
        target: 'https://backend-autofintion.microlance.id/',
        // pathRewrite: { '^/api/': '' },
        // changeOrigin: true
        changeOrigin: false,
    }
}