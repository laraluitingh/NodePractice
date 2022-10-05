-- Create database

-- CREATE DATABASE postgres;


--Create account table 

CREATE TABLE accounts(
	account_nr bigint GENERATED ALWAYS AS IDENTITY
             ( INCREMENT 1 START 100000 MINVALUE 100000 MAXVALUE 2147483647 CACHE 1 )
             PRIMARY KEY,
	account_name VARCHAR ( 50 ) NOT NULL,
	account_type VARCHAR ( 50 ) NOT NULL,
	currency varchar(20) NOT NULL,
	opening_balance int default 0
      
);

-- Insert account statement

INSERT INTO accounts (
 account_name, account_type, currency) VALUES ('SGSavings', 'Savings', 'SGD');

 INSERT INTO accounts (
account_name, account_type, currency) VALUES 
('AUSavings933' , 'Savings', 'AUD');

 INSERT INTO accounts (
account_name, account_type, currency) VALUES (
'AUCurrent', 'Current', 'AUD');


 -- Create transactions table

 CREATE TABLE transactions (
  transaction_id serial PRIMARY KEY,
  amount int NOT NULL ,
  debit_credit TEXT NOT NULL,
  transaction_date DATE DEFAULT CURRENT_DATE NOT NULL,
  transaction_narrative VARCHAR(250),
	account_number_id int REFERENCES accounts(account_nr) 
);



