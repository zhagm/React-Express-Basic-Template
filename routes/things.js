const express = require('express');
const router = express.Router();

const Thing = require('../models/Thing');

router.route('/')
  .get((req, res) => {
    Thing.find({}, (err, things) => {
      res.status(err ? 400 : 200).send(err || things);
    });
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
