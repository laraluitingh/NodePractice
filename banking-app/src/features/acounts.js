import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './account.css'
import { useDispatch} from "react-redux";
import { getAccounts } from '../store/accountSlice';

function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const dispatch = useDispatch();

    let href;

    useEffect(() => {

        dispatch(getAccounts())
    .unwrap()
    .then((res) => {
     setAccounts(res.account)
    })
    .catch((err) => {
      console.log(err.message)
    })
      }, [])

    
  return (
    <div>
      <table className="styled-table">
        <thead>
            <tr>
            <th>Account Number</th>
          <th>Account Name</th>
          <th>Account Type</th>
          <th>Balance Date</th>
          <th>Currency</th>
          <th>Opening Available Balance</th>

            </tr>
        </thead>
       <tbody>
        {accounts.map(account=>{
            href="/transaction/"+account.account_nr
            return(
                <tr key={account.account_nr}>
                <td><Link to={href}>{account.account_nr}</Link></td>
                <td>{account.account_name}</td>
                <td>{account.account_type}</td>
                <td>{account.balanceDate}</td>
                <td>{account.currency}</td>
                <td>{account.opening_balance}</td>
              </tr>

            )
        })}
        </tbody>
       
      </table>
    </div>
  );
}

export default Accounts;
