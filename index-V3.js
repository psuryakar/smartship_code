const http = require('http');
var server = http.createServer((request, response)=>
                        {
                           if(request.url =="/emps")
                           {
                                if(request.method=="GET")
                                {
                                    console.log("Select Code Goes Here")
                                    response.write("Select Query Executed")
                                }
                                if(request.method=="POST")
                                {
                                    console.log("INSERT Code Goes Here")
                                    response.write("INSERT Query Executed")
                                }
                                if(request.method=="PUT")
                                {
                                    console.log("UPDATE Code Goes Here")
                                    response.write("UPDATE Query Executed")
                                }
                                if(request.method=="DELETE")
                                {
                                    console.log("DELETE Code Goes Here")
                                    response.write("DELETE Query Executed")
                                }
                           }
                           else
                           {
                            response.write("Some other URL Called");
                           }
                            response.end();
                        });

                        

                        

server.listen(9999,()=>{
    console.log("Server Started..")
});