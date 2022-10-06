

// PROMISE LIBRARY
const promise = require('bluebird');
const Pool = require("pg").Pool;

// OVERRIDING DEFAULT PROMISE LIBRARY
// WHENEVER THERE IS A DATABASE INTERACTION WITH A ROUTE, THE DB QUERY WILL CONSOLE LOG
// const options = {
//   promiseLib: promise,
//   query: e => {
//     console.log(e.query);
//   }
// };
//const pgp = require('pg-promise')(options);

const proConfig = process.env.DATABASE_URL;


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}?sslmode=disable`

// SET UP THE CONNECTION STRING FOR THE DATABASE
const connectionString = process.env.NODE_ENV === "production" ? proConfig : devConfig;
///const db = pgp(connectionString);

const db = new Pool({
  connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig,
  ssl: { rejectUnauthorized: false }
})


module.exports = db;