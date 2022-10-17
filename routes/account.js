const AccountsController=require('../controllers/account')
var router = require('express').Router();

router.get('/', AccountsController.getAccounts);


module.exports = router;
