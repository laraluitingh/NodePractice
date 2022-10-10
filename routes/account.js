const AccountsController=require('../controllers/accountAndTransactionsController')
var router = require('express').Router();

router.get('/', AccountsController.getAccounts);


module.exports = router;
