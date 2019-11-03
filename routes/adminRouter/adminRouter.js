const router = require('express').Router();

const {authController, adminController} = require('../../controller');
const {authMiddleware, userMiddleware} = require('../../middlewares');

router.post('/auth/my', authController.authAdmin);

router.use(authMiddleware.checkAdminTokenMiddleware);

router.use('/users/:user_id', userMiddleware.checkIsUserPresentMiddleware);

router.post('/users/:user_id/block', adminController.blockUser);
router.post('/users/:user_id/unblock', adminController.unblockUser);


module.exports = router;
