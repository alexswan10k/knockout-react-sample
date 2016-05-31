module.exports = {
    entry: "./ts/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ["./", "node_modules"]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json"}
        ]
    },
    devtool: 'source-map'
};