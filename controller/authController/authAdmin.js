const {userService, oauthService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');
const {tokenizer, checkPasswordHash} = require('../../helpers');
const {USER_ROLES, USER_STATUS, JWT_METHOD} = require('../../constants');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.body;

        const isUserPresent = await userService.getUserByParams({email, role_id: USER_ROLES.ADMIN});

        if (!isUserPresent) {
            throw new ErrorHandler('User is not present', 404, 'authUser');
        }

        if (isUserPresent.status_id !== USER_STATUS.ACTIVE) {
            throw new ErrorHandler('Acc is blocked', 403, 'authUser');
        }

        await checkPasswordHash(isUserPresent.password, password);

        const tokens = tokenizer(JWT_METHOD.ADMIN);


        tokens.user_id = isUserPresent.id;

        oauthService.insertTokenPair(
            {
                user_id: isUserPresent.id,
                ...tokens
            });

        res.json(tokens);


    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller || 'authUser'
        })
    }
};
