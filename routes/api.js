const router = require("express").Router();
// const burgerController = require("../controllers/burgerController");
const db = require("../models");

console.log(db.Burger)

router.get("/burgers", function (req, res) {
  console.log("I'm hit")
  db.Burger.findAll()
    .then(function (dbBurger) {
      res.json(dbBurger)
    })
})

router.post("/burgers/add", function (req, res) {
  console.log("I'm hit")
  console.log(req.body);
  db.Burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  })
    .then(function (dbBurger) {
      res.json(dbBurger)
    })
})

router.put("/burgers/update", function (req, res) {
  console.log(req.body)

  db.Burger.update(Burger, {
    where: {
      id: req.body.id,
      devoured: devoured
    }
  })
    .then(function (burger) {
      burger.updateAttributes({
        devoured: !devoured
      })
    })
})

module.exports = router;
