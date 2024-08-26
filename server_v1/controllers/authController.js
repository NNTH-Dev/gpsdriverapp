const { AuthService } = require('../services/authService');
const { UserRepository } = require('../repo/userRepo');
const { 
    AccountRepository, 
    PasswordRepository,  
    TokenRepository
} = require('../repo/authRepo');

const AccountModel = require('../models/Account');
const PasswordModel = require('../models/Password');
const TokenModel = require('../models/Token');
const UserModel = require('../models/User');

const userRepo = new UserRepository(UserModel);
const passRepo = new PasswordRepository(PasswordModel);
const tokenRepo = new TokenRepository(TokenModel);
const accountRepo = new AccountRepository(AccountModel);

const authService = new AuthService(accountRepo, passRepo, tokenRepo, userRepo);

exports.register = async (req, res, next) => {
    try {
        const response = await authService.register(req);
        res.statusCode = response.statusCode;
        return res.json({ message: response.message, data: response.data });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const response = await authService.login(username, password);
        res.statusCode = response.statusCode;
        return res.json({ message: response.message, data: response.data });
    } catch (error) {
        next(error);
    }
}

