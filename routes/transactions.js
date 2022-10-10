const TransactionsController=require('../controllers/transactions')
var router = require('express').Router();

router.get('/:accountNr', TransactionsController.getAllTransactions);
router.post('/:accountNr', TransactionsController.createTransaction);

module.exports = router;
