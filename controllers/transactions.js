const Transactions = require('../models/transactions');
const Accounts = require('../models/accounts');

module.exports ={
   
    getAllTransactions(req,res,next){

        let accountNr=req.params.accountNr
        Transactions.get(accountNr)
         .then(data=>{
            data=data.rows
            res.status(200).json({success:true, transactions:data})
         })
         .catch(err=>res.status(400).json({err: err.message}))

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
                    .catch(err=>res.status(400).json({message: err.message}))

            })
            .catch(err=>res.status(400).json({message: err.message}))

        

    }


}