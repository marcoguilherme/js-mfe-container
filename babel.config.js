module.exports = function(api) {
    api.cache(true)

    const presets = [
        '@babel/preset-env'
    ];

    const plugin = [];

    return { presets, plugin }
}