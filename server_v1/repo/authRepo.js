class AccountRepository {
    constructor(accountModel) {
        this.accountModel = accountModel;
    }

    addAccount(id, userId, username, email) {
        return this.accountModel.create({
            id,
            userId,
            username,
            email
        })
    }

    getAllAccount() {
        return this.accountModel.find();
    }

    getAccountByEmail(email) {
        return this.accountModel.findOne({ email });
    }

    getAccountByUserId(userId) {
        return this.accountModel.findOne({ userId });
    }

    deleteAccountByEmail(email) {
        return this.accountModel.findOneAndDelete({ email });
    }
}

class PasswordRepository {
    constructor(passwordModel) {
        this.passwordModel = passwordModel;
    }

    addPassword(id, accountId, password) {
        return this.passwordModel.create({
            id,
            accountId,
            password
        })
    }

    getPasswordByAccountId(accountId) {
        return this.passwordModel.findOne({ accountId });
    }

    deletePasswordByAccountId(accountId) {
        return this.passwordModel.findOneAndDelete({ accountId });
    }
}

class TokenRepository {
    constructor(tokenModel) {
        this.tokenModel = tokenModel;
    }

    addToken(id, accountId, token) {
        return this.tokenModel.create({
            id,
            accountId,
            token,
        })
    }

    updateTokenByRefreshToken(refreshToken, token) {
        return this.tokenModel.findOneAndUpdate({ refreshToken }, {
            $set: { token }
        }, { new: true });
    }

    getTokenByAccountId(accountId) {
        return this.tokenModel.findOne({ accountId });
    }

    deleteTokenByAccountId(accountId) {
        return this.tokenModel.findOneAndDelete({ accountId });
    }
}

module.exports = {
    AccountRepository,
    PasswordRepository,
    TokenRepository
};