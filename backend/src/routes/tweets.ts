import express from 'express';

const router = express.Router();

// all tweets
router.get('/', (req, res) => {
  res.status(501).json({ error: 'not implemented Get all tweets' });
});

// get one user
router.get('/:tweetID', (req, res) => {
  const { tweetID } = req.params;
  res.status(501).json({ error: `not implemented via get tweet with tweetID: ${tweetID}` });
});

router.post('/tweet', (req, res) => {
  res.status(501).json({ error: 'not implemented create a tweet' });
});

// update user
router.put('/:tweetID', (req, res) => {
  const { tweetID } = req.params;
  res.status(501).json({ error: `not implemented via uptdate tweet with tweetID: ${tweetID}` });
});

// delete user
router.delete('/:tweetID', (req, res) => {
  const { tweetID } = req.params;
  res.status(501).json({ error: `not implemented via delete tweet with tweetID: ${tweetID}` });
});

export default router;
