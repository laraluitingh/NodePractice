const Transactions = require('../models/transactions');
const Accounts = require('../models/accounts');

module.exports ={
    getAccounts(req, res, next){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        Accounts.get()
            .then(data=>{
                data=data.map(obj=>{
                    return {...obj,
                    balanceDate: today}
                })
                res.status(200).json({success:true, account: data}
                    )})
            .catch(err=>res.status(400).json({err}))


    },


    getAllTransactions(req,res,next){

        let accountNr=req.params.accountNr
        Transactions.get(accountNr)
         .then(data=>{
            res.status(200).json({success:true, transactions:data})
         })
         .catch(err=>res.status(400).json({err}))

    },


    createTransaction(req,res,next){
        const {amount,debitOrCredit, transactionNarrative} = req.body

        let accountNr=req.params.accountNr

        Transactions.create(amount, debitOrCredit, transactionNarrative, accountNr)
            .then(()=>{
                Accounts.updateBalance(amount, accountNr, debitOrCredit)
                    .then(()=>{
                        res.status(200).json({success: true, msg:'transaction created'})
                    })
                    .catch(err=>res.status(400).json({err}))

            })
            .catch(err=>res.status(400).json({err}))

        

    }


}