const express =  require('express');
//const config = require('config');

const appForEmps = express.Router();
 const mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : config.get("host"),
//     user     :  config.get("user"),
//     password :  config.get("password"),
//     database :  config.get("database")
//    });

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'punedac'
    });  


//GET = SELECT FROM DB
appForEmps.get("/", (request, response)=>{
    // response.send("EMPS GET IS CALLED");
    connection.query("select * from Emp", (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})

//POST = INSERT INTO DB
appForEmps.post("/", (request, response)=>{
    // console.log("Data Received from Client / Browser / POSTMAN")
    // console.log(request.body)
    // response.send("EMPS POST IS CALLED");

    var query = 
    `insert into Emp values(${request.body.EmpNo}, '${request.body.EName}','${request.body.EAddress}')`;

    connection.query(query, (error, result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result) 
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } 
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error)
        }
        response.end();
})
})

//PUT = UPDATE INTO DB
appForEmps.put("/:EmpNo", (request, response)=>{
    //response.send("EMPS PUT IS CALLED");
    var query = 
    `update Emp set EName = '${request.body.EName}',
                    EAddress = '${request.body.EAddress}' where EmpNo = ${request.params.EmpNo}`;

    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

//DELETE  = DELETE FROM DB
appForEmps.delete("/:EmpNo", (request, response)=>{
    // response.send("EMPS DELETE IS CALLED");
    var query = 
    `delete from Emp where EmpNo = ${request.params.EmpNo}`;
                    
    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

module.exports = appForEmps;