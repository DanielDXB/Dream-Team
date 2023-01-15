const express = require("express");
const connection = require("../database/dbconnection");
const router = express.Router();

router.post("/form", (req, res, next) => {
  let formInfo = req.body;
  let query = "insert into applications (name, age, description) values(?,?,?)";
  connection.query(
    query,
    [formInfo.name, formInfo.age, formInfo.description],
    (err, result) => {
      if (!err) {
        return res
          .status(200)
          .json({ message: "Succesfully inserted into application!" });
      } else {
        return res.status(404).json({ err });
      }
    }
  );
});

module.exports = router;
