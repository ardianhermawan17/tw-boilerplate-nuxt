module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/recommended',
        'prettier'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true
            }
        ]
    }
}