const express = require('express');
const router = express.Router();

const friends = require('../data/friends');

router.get('/friends', (req, res) => {
  return res.json(friends);
});

router.post('/friends', (req, res) => {
  var friend = req.body;
  var match = {
    name: '',
    photo: '',
    difference: 10000
  };

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('photoLink', 'photo url is required').notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    res.status(404).json({ error: errors });
  } else {
    for (var i = 0; i < friends.length; i++) {
      var difference = 0;

      for (var j = 0; j < friends[i].scores.length; j++) {
        difference += Math.abs(friends[i].scores[j] - friend.scores[j]);
      }

      if (difference <= match.difference) {
        match.name = friends[i].name;
        match.photo = friends[i].photo;
        match.difference = difference;
      }
    }

    friends.push(friend);
    res.json(match);
  }
});

module.exports = router;
