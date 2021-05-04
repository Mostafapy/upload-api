const router = require('express').Router({
    mergeParams: true
});

const upload = require('../middlewares/uploadMiddleware');
const uploadController = require('../controllers/uploadController');

router.post('/upload', upload.single('image'), uploadController);

module.exports = router;