module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/apple-music/' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}