const customResourceResponse = require('../utils/constants');
const { randomToken } = require('../utils/authUtils');
const uuidV4 = require('uuid').v4;


class AuthService {

    constructor(accountRepo, passRepo, tokenRepo, userRepo) {
        this.accountRepo = accountRepo;
        this.passRepo = passRepo;
        this.tokenRepo = tokenRepo;
        this.userRepo = userRepo;
    }

    async register(req) {
        const {
            username,
            password,
            email,
            firstName,
            lastName,   
            phoneNumber,
            address,
        } = req.body;

        if (!email || !firstName || !lastName || !password) {
            return {
                message: customResourceResponse.reqValidationError.message,
                statusCode: customResourceResponse.reqValidationError.statusCode,
            };
        }
    
        try {
            const accountExist = await this.accountRepo.getAccountByEmail(email);
            if (accountExist) {
                return {
                    message: customResourceResponse.userExists.message,
                    statusCode: customResourceResponse.userExists.statusCode,
                };
            }
            
            // Add user to the database
            const user = await this.userRepo.addUser(uuidV4(), username, email, firstName, lastName, phoneNumber, address);
            if (!user) {
                return {
                    message: customResourceResponse.serverError.message,
                    statusCode: customResourceResponse.serverError.statusCode,
                };
            }
    
            // Add account to the database
            const account = await this.accountRepo.addAccount(uuidV4(), user.id, user.username  , user.email);
            if (!account) {
                return {
                    message: customResourceResponse.serverError.message,
                    statusCode: customResourceResponse.serverError.statusCode,
                };
            }
    
            // Add password to the database
            const savedPassword = await this.passRepo.addPassword(uuidV4(), account.id, password);
            if (!savedPassword) {
                return {
                    message: customResourceResponse.serverError.message,
                    statusCode: customResourceResponse.serverError.statusCode,
                };
            }
        
            // Return success response
            return {
                message: customResourceResponse.reqCreated.message,
                statusCode: customResourceResponse.reqCreated.statusCode,
                data: { action: "complete" },
            };
        } catch (error) {
            return {
                message: customResourceResponse.serverError.message,
                statusCode: customResourceResponse.serverError.statusCode,
            };
        }
    }
    
    async login(username, password) {
        console.log("🚀 ~ AuthService ~ login ~ password:", password)
        console.log("🚀 ~ AuthService ~ login ~ username:", username)
        const response = {};

        const resToken = "";

        try {
            const account = await this.accountRepo.getAccountByEmail(username);
            console.log("🚀 ~ AuthService ~ login ~ account:", account)
            if (account) {
                const pass = await this.passRepo.getPasswordByAccountId(account.id);
                if (pass.password === password) {
                    const random = randomToken();
                    console.log("🚀 ~ AuthService ~ login ~ randomToken():", random)
                    const token = await this.tokenRepo.addToken(uuidV4(), account.id, random);
                    console.log("🚀 ~ AuthService ~ login ~ token:", token)
                    if (token) {
                        response.message = customResourceResponse.reqCreated.message;
                        response.statusCode = customResourceResponse.reqCreated.statusCode;
                        response.data = {
                            accessToken: token.token,
                        };
            
                        return response;
                    } else {
                        response.message = customResourceResponse.serverError.message;
                        response.statusCode = customResourceResponse.serverError.statusCode;
                        return response;
                    }
                } else {
                    response.message = customResourceResponse.authError.message;
                    response.statusCode = customResourceResponse.authError.statusCode;
                    return response;
                }
            } else {
                response.message = customResourceResponse.userNotFound.message;
                response.statusCode = customResourceResponse.userNotFound.statusCode;
                return response;
            }

            
        } catch (error) {
            console.log("🚀 ~ AuthService ~ login ~ error:", error)
            return {
                message: customResourceResponse.serverError.message,
                statusCode: customResourceResponse.serverError.statusCode,
            };
        }
    }
}

module.exports = {
    AuthService,
};