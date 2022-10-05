const db = require('../config/config');

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const Accounts = {};

// CREATE Accounts
Accounts.create = (accountName, accountType, currency) => {
  return db.none(`INSERT into accounts(account_name, account_type, currency)` + `VALUES($1, $2, $3)`, [accountName, accountType, currency]);
};

// GET ALL ACCOUNTS
Accounts.get = () => {
  return db.any('SELECT * FROM accounts');
};

//UPDATE balance
Accounts.updateBalance= (balance, accountnr, debitOrCredit) => {
if(debitOrCredit==="Credit"){
    return db.none(`UPDATE accounts SET opening_balance=opening_balance+$1 WHERE account_nr = $2`, [
        balance,
        accountnr
      ]);

}

if(debitOrCredit==="Debit"){

    return db.none(`UPDATE accounts SET opening_balance=opening_balance-$1 WHERE account_nr = $2`, [
        balance,
        accountnr
      ]);


}
  
};

// DELETE AN ARTICLE
// Article.delete = id => {
//   return db.none(`DELETE from articles WHERE id = $1`, id);
// };

module.exports = Accounts;