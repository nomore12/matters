module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    "plugins": ['prettier'],
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        'no-unused-vars': 1,
        'prettier/prettier': [
            'error',
        {
            "endOfLine": 'auto',
        },
    ],
    }
};
