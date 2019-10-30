const {userService, oauthService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');
const {tokenizer} = require('../../helpers');


module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        const isUserPresent = await userService.getUserByParams({email});

        if (!isUserPresent) {
            throw new ErrorHandler('User is not present', 404, 'authUser');
        }

        const tokens = tokenizer();


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
