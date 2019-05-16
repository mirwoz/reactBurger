const express = require("express");

var mysql = require("mysql");
const routes = require("./routes/api");
const app = express();
const db = require("./models");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const DB_PASS = require("./.env")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers'
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// process.once('SIGUSR2', function () {
//   gracefulShutdown(function () {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

// process.on('SIGINT', () => {
//   console.log('do SIGINT');
//   process.exit();
// });

