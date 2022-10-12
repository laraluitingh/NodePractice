import {Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './account.css'
function Accounts() {
    const [accounts, setAccounts] = useState([]);
    let href;

    useEffect(() => {
        fetch('/api/accounts')
        .then(res => res.json())
        .then(res => {setAccounts(res.account); console.log(res);})
        .catch(err => console.log(err));
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