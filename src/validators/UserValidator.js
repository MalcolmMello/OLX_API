const { checkSchema } = require('express-validator')

module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            isLength: {
                options: {min: 2}
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido'
        },
        password: {
            optional: true,
            isLength: {
                options: {min: 2}
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    })
}