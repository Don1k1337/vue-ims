const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'User with such email not found,' +
        ' please check for correctness',
    INVALID_PASSWORD: 'User password is invalid, please check',
    auth: `You don't have access to this page, please log-in with your credentials`
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error caused'
}