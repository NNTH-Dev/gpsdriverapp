const randomToken = () => {
    return require('crypto').randomBytes(64).toString('hex')
}

module.exports = {
    randomToken
}