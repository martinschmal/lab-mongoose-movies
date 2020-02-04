const express = require("express");
const router = express.Router();
const Celeb = require("../models/Celebs");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET Celb list */
router.get("/celebs", (req, res, next) => {
  Celeb.find({})
    .then(result => {
      console.log("result >>> " + result);
      res.render("celebrities/index.hbs", { celebsList: result });
    })
    .catch(err => {
      next(err);
    });
});

/*  Iteration 3 -  GET Celb details show.hbs */
router.get("/celebs/:id", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(result => {
      console.log("result >>> " + result);
      res.render("celebrities/show.hbs", result);
    })
    .catch(err => {
      next(err);
    });
});

/*  Iteration 4 -  Add Celb  show.hbs */
router.get("/celebs-add", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebs-create", (req, res, next) => {
  Celeb.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(createdCeleb => {
      //console.log(createdCeleb._id);
      res.redirect(`/celebs/${createdCeleb._id}`);
    })
    .catch(err => {
      next(err);
    });
});

/*  Iteration 5 - deleting  */
router.get("/celebs/:id/delete", (req, res, next) => {
  Celeb.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log("result >>> " + result);
      res.redirect(`/celebs`);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
