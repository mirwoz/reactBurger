require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "burgers",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "burgers",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_var": process.env.JAWSDB_URL
  }
}