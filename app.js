var express = require("express");
var http = require("http");
var app = express();
var sleep = require('system-sleep');
var flag = 0;
app.get("/startup", function(request, response) {
  response.end("Welcome to the startup page!");
  console.log("/startup...") ;

});

app.get("/user/:who", function(req, res) {
  res.end("User " + req.params.who + ": welcome back to the system.");
  console.log("/user/:who");
  console.log(req.route);
  console.log("\n  field: ", res.get('Content-Type'));
});

app.get("/healthz", function(request, response) {
  if (flag == 0) {
  sleep(process.env.TIMEDELAY);
  flag = 1;
  }
  response.end("Welcome to the healthz page!");
   console.log("/healthz...") ;
});

app.get("/liveness", function(request, response) {
  response.end("Welcome to the liveness page!");
   console.log("/healthz...") ;
});

app.get("*", function(request, response) {
  response.end("<h4>404! File Missing</h4>");
  console.log("404") ;
});
