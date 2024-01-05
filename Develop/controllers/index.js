const router = require('express').Router();
const apiRoutes = require('./api');
const appRoutes = require('./appRoutes');


router.use('/api', apiRoutes);
router.use('/', appRoutes);

module.exports = router;
