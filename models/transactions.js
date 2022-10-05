const db = require('../config/config');

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const Transactions = {};

// CREATE a transaction
Transactions.create = (amount, debitOrCredit, transactionNarrative, accountNumber) => {
  return db.none(`INSERT into transactions(amount, debit_credit, transaction_narrative, account_number_id)` 
  + `VALUES($1, $2, $3, $4)`, [amount, debitOrCredit, transactionNarrative, accountNumber]);
};

// GET ALL transactions
Transactions.get = (accountNR) => {
  return db.any(`SELECT transactions.amount, transactions.debit_credit, transactions.transaction_date, transactions.transaction_narrative,`+
    `accounts.account_nr, accounts.account_name, accounts.currency FROM transactions INNER JOIN accounts ON accounts.account_nr=transactions.account_number_id where account_nr=${accountNR}`);
};


module.exports = Transactions;