import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import {getTransactions} from '../store/transactionSlice';


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const { id } = useParams();
  const [noTransactions, setNoTransaction] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTransactions(id))
    .unwrap()
    .then((res) => {
     console.log(res)
     let transactions = res.transactions;
        if (transactions.length === 0) {
        } else {
          setNoTransaction(false);
          transactions = transactions.map((transaction) => {
            if (transaction.debit_credit === "Credit") {
              return {
                ...transaction,
                transaction_date: transaction.transaction_date.split("T")[0],
                creditAmount: transaction.amount,
                debitAmount: 0,
              };
            }

            if (transaction.debit_credit === "Debit") {
              return {
                ...transaction,
                transaction_date: transaction.transaction_date.split("T")[0],
                creditAmount: 0,
                debitAmount: transaction.amount,
              };
            }
          });
          setTransactions(transactions);
        }
    })
    .catch((err) => {
      console.log(err.message)
    })

  }, [id]);

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Value Date</th>
            <th>Currency</th>
            <th>Debit Amount</th>
            <th>Credit Amount</th>
            <th>Debit/Credit</th>
            <th>Transaction Narrative</th>
          </tr>
        </thead>
        <tbody>
          {noTransactions ? (
            <tr>
              <td>No Transactions</td>
              </tr>
          ) : (
            transactions.map((transaction) => {
              return (
                <tr key={transaction.transaction_id}>
                  <td>{transaction.account_nr}</td>
                  <td>{transaction.account_name}</td>
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.currency}</td>
                  <td>{transaction.debitAmount}</td>
                  <td>{transaction.creditAmount}</td>
                  <td>{transaction.debit_credit}</td>
                  <td>{transaction.transaction_narrative}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
