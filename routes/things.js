const express = require('express');
const router = express.Router();

const Thing = require('../models/Thing');

router.route('/')
  .get((req, res) => {
    Thing.find()
    //.limit(10)
    //.sort('timestamp')
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
