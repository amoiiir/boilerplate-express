const dotenv = require("dotenv");
const bodyParser = require("body-parser");
let express = require("express");
let app = express();

//configure dotenv
dotenv.config();

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// middleware functions -> simple logger
app.use(function middleware(req, res, next){
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.get("/now", function middleware(req, res, next){
  req.time = new Date().toString();
  console.log("time", req.time);
  next();
}, function(req, res){
  res.send({
    time: req.time,
  });
});

//get route parameter from input client
// app.get("/:word/echo", function middleware(req, res, next){
//   res.send({ echo: req.params.word});
//   next();
// });

//get query parameter fromm input client
app.get("/name", (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;
  
  res.json({
    name: `${firstName} ${lastName}`,
  })
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

//What is the function of this app.get?
// use get HTTP method to get response
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// what is the function of the res.json?
// 1. converts javascript object into JSON string -> basicly buat API
// 2. set the appropriate response headers to tell client that response type is application/json
// 3. sends the JSON as string as HTTP response
app.get("/json", (req, res) => {
  //access the env variables
  const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
  console.log("message", MESSAGE_STYLE);

  const responseMessage =
    MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";

  res.json({
    message: responseMessage,
  });
});

// What is the function of the code below?
// place the static assets needed by our website application (stylesheet, scripts, image)
// it is a middleware function
// it will apply for all requests
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
