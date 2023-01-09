const mysql = require("mysql");

/*
Make sure you remove the following when push on github (or just coppy the lines above into the function):
  port: ,
  localhost: "",
  user: "",
  password: "",
  database: "",
*/ 
const connection = mysql.createConnection({
  port: 3306,
  localhost: "",
  user: "",
  password: "",
  database: "",
});

connection.connect((err) => {
  if (!err) {
    console.log("Succesfuly connected to database!");
  } else {
    console.log(err);
  }
});

module.exports = connection;
