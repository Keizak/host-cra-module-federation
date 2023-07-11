const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {name, dependencies: deps} = require('./package.json')

const addPlugins = config => {
    config.plugins.unshift(
        new ModuleFederationPlugin({
            name,
            shared: {
                ...deps,
                react: {
                    eager:true,
                    requiredVersion: deps["react"],
                    singleton:true,
                },
                "react-dom": {
                    eager:true,
                    singleton:true,
                    requiredVersion: deps["react-dom"],
                },

            },
            filename: 'remoteEntry.js',
            exposes: {},
            remotes: {
                Weather: "remote_app_cra@http://localhost:3001/remoteEntry.js"
            },
        })
    )
    return config
}

module.exports = [
    config => {
        const mode = process.env.NODE_ENV || 'development'
        if(mode === 'development'){
            const publicPath = `//${process.env.HOST}:${process.env.PORT}/`
            config.mode = mode
            config.output.publicPath = publicPath
        }
        return addPlugins(config)
    },
]
