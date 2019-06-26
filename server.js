var express = require('express');
var app = express();


var employeeController=function(req, res)
{
  console.log("employee list");
  var employee = 
  [
    {empid:114, Customer:"aakash",Amount:100000},
    {empid:204, Customer:"yogesh",Amount:20000},
    {empid:331, Customer:"aditya",Amount:500000}
  ];
  res.send(employee);
};
 

app.get('/employee',employeeController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})