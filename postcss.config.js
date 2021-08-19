module.exports = (ctx) => ({
    ...ctx.options,
    plugins: {
        'postcss-rename': { prefix: "bs-" },
        "autoprefixer": {}
    },
})