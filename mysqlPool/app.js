const mysql = require("mysql")

var mysqlPool =  mysql.createPool({
    host:"localhost",
    user:"root",
    password:"rootroot",
    database:"test",
    port:3306
});

mysqlPool.getConnection(function(err, connection){
    if(err){
        console.log(err)
        return
    }
    var query = connection.query( "select * from table_test where name = ? and value = ?",["lizhuang",2],function(err, rows){
        if(err)    {
            throw err;
        }else{
            console.log( rows );
        }
        // conn.release(); // not work!!!
        mysqlPool.releaseConnection(connection)
    });
    console.log(query.sql)
});