const router = require('express').Router();

const {authController} = require('../../controller');
const {authMiddleware, userMiddleware} = require('../../middlewares');

router.post('/auth/my', authController.authAdmin);

router.use(authMiddleware.checkAdminTokenMiddleware);

router.use('/users/:user_id', userMiddleware.checkIsUserPresentMiddleware);
router.post('/users/:user_id/block', authController.authAdmin);
router.post('/users/:user_id/unblock', authController.authAdmin);


module.exports = router;
