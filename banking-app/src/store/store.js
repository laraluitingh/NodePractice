import {configureStore} from "@reduxjs/toolkit"
import accountSlice from "./accountSlice";
import transactionSlice from "./transactionSlice";

const store= configureStore({
    reducer:{
        accounts:accountSlice.reducer,
        transactions: transactionSlice.reducer
        
    }
});

export default store;