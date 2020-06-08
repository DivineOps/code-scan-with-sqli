// Secrets committed in code
const apiKey = "12345678901234567890123456789012-12345678-12345678";
const db = "abc123.database.secure.windows.net"

// define database and app
const pg = require('pg');
const app = require('express')();
const pool = new pg.Pool();
 
// This will produce a SQL injection and rate limiting alerts
// Get a category from the database
app.get("/category/:category", function (req, res) {
  
  // BAD: the category might have SQL special characters in it
  var query1 = "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='"
             + req.params.category + 
             "' ORDER BY PRICE";

  pool.query(query1, [], function(err, results) {
    // process results
  });
 
 res.send('Results')

});

// This will produce an incorrect suffix alert
// shortened endsWith function by one line of code
function endsWith(x, y) {
  return x.lastIndexOf(y) === x.length - y.length;
}
