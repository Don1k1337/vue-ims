const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'User with such email not found,' +
        ' please check for correctness',
    INVALID_PASSWORD: 'User password is invalid, please check'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error caused'
}