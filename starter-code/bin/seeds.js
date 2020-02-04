const celebs = [
  { name: "Wes Anderson", occupation: "Director", catchPhrase: "Revenge!" },
  {
    name: "Snoop Dog",
    occupation: "Rapstar",
    catchPhrase: "I wanna thank me for believing in me"
  },
  {
    name: "Pete Doherty",
    occupation: "Singer",
    catchPhrase: "Oh what became of the likely lads"
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/celebrity-project", () => {
  console.log("Connected to Celebrity Database");
});

const Celeb = require("../models/Celebs");
Celeb.collection.drop();

Celeb.create(celebs)
  .then(result => {
    console.log(`Created ${result.length} celebs`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
