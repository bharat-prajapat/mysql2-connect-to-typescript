// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'ls-2a6c9c3b782199514dd84e31a63f11c1fb6841e2.cvrhqbmfa9or.us-east-1.rds.amazonaws.com',
  user: 'admin',
  database: 'dbDev',
  password: 'T)n<!?D4C.FB&9CCW)9F6QGV22aO}`{z',
});

// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM CrawlerHistoryTable',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);
