const express = require('express');
const router = express.Router();
// import the tweet
const Tweet = require('../models/tweet')
const tweetSeed = require('../db/tweetSeed')

// Create
// Create
router.post('/', async (req, res) => {
	// req.body has the data
	// create a new document in the collection
	// wait for this line of code to finish then do the next thing
	const tweet = await Tweet.create(req.body)
	res.send(tweet)
});

// Index
router.get('/', async (req, res) => {
	const tweets = await Tweet.find({})
	res.send(tweets);
});

// Seed
router.get('/seed', async (req, res) => {
	await Tweet.deleteMany({})
	await Tweet.create(tweetSeed)
	res.redirect('/tweets');
});

// Show
router.get('/:id', async (req, res) => {
	const tweet = await Tweet.findById(req.params.id)
	res.send(tweet);
});

// Delete
router.delete('/:id', async (req, res) => {
    const tweet = await Tweet.findByIdAndDelete(req.params.id)
    res.send({success: true, tweet});
});

// Update
router.put('/:id', async (req, res) => {
	const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})
	res.send(tweet);
});

module.exports = router;
