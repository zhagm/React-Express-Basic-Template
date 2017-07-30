const express = require('express');
const router = express.Router();

const Thing = require('../models/Thing');

router.route('/')
  .get((req, res) => {
    Thing.find()
    //.limit(10) // returns only the amount of items as specified in limit
    //.sort('timestamp') // sort by property mentioned, add '-' before to reverse
    //.select('name') // will only show id and properties mentioned in select
      .then(things => {
        res.send(things);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })
  .post((req, res) => {
    Thing.create(req.body)
      .then(savedThing => {
        res.send(`${savedThing} was saved`);
      })
      .catch(err => {
        res.status(400).send(err)
      })
  });

router.route('/:id')
  .put((req, res) => {
    Thing.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then(unupdatedThing => {
        res.send(`Update Successful`)
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })
  .get((req, res) => {
    Thing.findById(req.params.id)
      .then(thing => {
        res.send(thing);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })

module.exports = router;
