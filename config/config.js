

// PROMISE LIBRARY
const promise = require('bluebird');

// OVERRIDING DEFAULT PROMISE LIBRARY
// WHENEVER THERE IS A DATABASE INTERACTION WITH A ROUTE, THE DB QUERY WILL CONSOLE LOG
const options = {
  promiseLib: promise,
  query: e => {
    console.log(e.query);
  }
};
const pgp = require('pg-promise')(options);


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

// SET UP THE CONNECTION STRING FOR THE DATABASE
const connectionString = process.env.NODE_ENV === "production" ? proConfig : devConfig;
const db = pgp(connectionString);

module.exports = db;