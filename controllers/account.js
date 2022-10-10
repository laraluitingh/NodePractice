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
                data=data.rows
                data=data.map(obj=>{
                    return {...obj,
                    balanceDate: today}
                })
                res.status(200).json({success:true, account: data}
                    )})
            .catch(err=>res.status(400).json({err: err.message}))


    },


 

}