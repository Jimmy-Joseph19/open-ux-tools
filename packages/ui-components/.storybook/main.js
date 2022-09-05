const path = require('path');

module.exports = {
    core: {
        builder: 'webpack5'
    },
    stories: ['../stories/**/*.stories.tsx', '../src/components/**/*.story.tsx'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: 'tsconfig-test.json',
                        transpileOnly: true
                    }
                }
            ]
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false
                    }
                },
                'sass-loader'
            ],
            include: path.resolve(__dirname, '../')
        });
        config.resolve.extensions.push('.ts', '.tsx');
        // Temporary fix, while root issue is not fixed in webpack 5 - https://github.com/webpack/webpack/issues/13691
        config.cache = false;
        return config;
    }
};
