//Code to connect NODE to MYSQL
//=============================

var mysql = require("mysql");

var connection;

if (process.env.TEJDB_URL) {
  connection = mysql.createConnection(process.env.TEJDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "developer1", 
    database: "burgers_db"
});
}

// connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "developer1", 
//     database: "burgers_db"
// });

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

//Exporting the connection
//==============================

module.exports = connection;

