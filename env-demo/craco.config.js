const CracoEnvPlugin = require('craco-plugin-env')

module.exports = {
    plugins: [
        {
            plugin: CracoEnvPlugin,
            // Enter the variable to be interpolated in the html file
            options: {
                variables: {
                    BUILD_VERSION: require('child_process')
                        .execSync('git describe --tags --abbrev=0', { cwd: __dirname })
                        .toString().trim().split(/\r?\n/),
                },
            },
        },
    ],
};