module.exports = (ctx) => ({
    ...ctx.options,
    plugins: {
        'postcss-rename': {
            prefix: "bs-",
            except: [
                'show',
                'fade'
            ]
        },
        "autoprefixer": {}
    },
})