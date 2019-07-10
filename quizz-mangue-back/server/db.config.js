const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mangue"
});

connection.connect();

(function test() {
    try {
        connection.query('SELECT 1 + 1 AS solution', function (error) {
            if (error) throw error;
            console.log("===== yay !!! succesfully connected to mysql server =====");
        });
    } catch(err) {
        console.error(err);
    }
}());

const close = function close() {
    connection.end();
};

module.exports = {
    close,
    connection
}
