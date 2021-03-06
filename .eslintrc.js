module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb','plugin:cypress/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier','cypress'],
    env: {
        "cypress/global":true
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/strict-boolean-expression': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'no-redeclare': 'off',
        'import/export': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'object-curly-newline': 'false',
    },
};
