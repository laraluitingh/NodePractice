const AccountsAndTransactionController=require('../controllers/accountAndTransactionsController')
var router = require('express').Router();

router.get('/accounts', AccountsAndTransactionController.getAccounts);
router.get('/transactions/:accountNr', AccountsAndTransactionController.getAllTransactions);
router.post('/insert-transaction/:accountNr', AccountsAndTransactionController.createTransaction);

module.exports = router;
